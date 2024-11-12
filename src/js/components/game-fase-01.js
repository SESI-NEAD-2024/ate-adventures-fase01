// Código atualizado refatorado 04/11/2024

let gameFrame = null;
let gameIframe = null;
let scormDataJson = null;

export default {
  data() {
    return {
      debugWithoutScorm: false,
      scormData: {},
      playerDefault: {
        Jogador_Nome: "Jogador",
        Personagem: "01",
        student_name: null,
        student_id: null,
      },
    };
  },
  mounted() {
    console.log("game-fase.js");

    // O Iframe aparece apenas quando o HTML é carregado e quando a API SCORM iniciada
    this.scormLoad();
  },
  methods: {
    /**
     * Carrega o SCORM e inicializa o jogo ou carrega um jogador genérico caso a API SCORM não esteja disponível.
     * Usa trechos de código do arquivo scorm-app.js.
     *
     * @return {void} Esta função não retorna um valor.
     */
    scormLoad() {
      if (typeof scormAPI !== "undefined" && scormAPI) {
        this.checkScormInitialization();
      } else {
        this.loadGenericPlayer();
      }
    },

    /**
     * Configura uma verificação periódica para determinar se o SCORM LMS foi inicializado.
     * Uma vez inicializado, ele para o intervalo, registra os dados SCORM e prossegue
     * para carregar os dados SCORM e configurar o jogo.
     * @return {void} This function does not return a value.
     */
    checkScormInitialization() {
      const interval = setInterval(() => {
        console.log("PRE LMSIsInitialized");
        if (LMSIsInitialized()) {
          // Quando tudo estiver carregado e pronto para funcionar
          clearInterval(interval);
          console.log("LMSIsInitialized");

          console.log(
            "getScormData(FIELDS.studentId)",
            getScormData(FIELDS.studentId)
          );
          console.log(
            "getScormData(FIELDS.studentName)",
            getScormData(FIELDS.studentName)
          );
          this.loadScormData();
          this.setupGame();
        }
      }, 500); // 0.5s segundo
    },

    /**
     * Carrega os dados SCORM do LocalStorage ou do aluno genérico, de acordo com o ID do aluno.
     *
     * @return {void} Esta função não retorna um valor.
     */
    loadScormData() {
      const studentId = getScormData(FIELDS.studentId);
      const localStorageData = this.getLocalStorage();
      // Recupera Local Storage de acordo com o ID do aluno
      if (localStorageData && localStorageData.student_id === studentId) {
        console.log("Carregando dados do LocalStorage");
        this.scormData = localStorageData;
      } else {
        console.log("Carregando dados genéricos");
        this.scormData = this.playerDefault;
      }
    },

    /**
     * Carrega um jogador genérico caso a API SCORM não esteja disponível.
     *
     * @return {void} Esta função não retorna um valor.
     */
    loadGenericPlayer() {
      this.scormData = this.getLocalStorage() || this.playerDefault;
      this.setupGame();
    },

    /**
     * Salva os dados do jogo no LocalStorage, com base nos dados do SCORM.
     * Se a opção debugWithoutScorm estiver ativa, não salva os dados no LocalStorage.
     *
     * @return {void} Esta função não retorna um valor.
     */
    saveLocalStorage() {
      // Identificador de pessoa

      try {
        // Identificador de pessoa
        this.scormData.student_name =
          getScormData(FIELDS.studentName) || this.playerDefault.Jogador_Nome;
        this.scormData.student_id =
          getScormData(FIELDS.studentId) || this.playerDefault.Personagem;

        // Salva dados em formato JSON
        localStorage.setItem("Game", JSON.stringify(this.scormData));
      } catch (error) {
        console.log("API SCORM não disponível");

        this.scormData.student_name = this.playerDefault.Jogador_Nome;
        this.scormData.student_id = this.playerDefault.Personagem;

        localStorage.setItem("Game", JSON.stringify(this.scormData));

        console.error(error);
      }
    },

    /**
     * Se existir dados no LocalStorage, converte para JSON e retorna o objeto, senão, retorna false
     *
     * @return {object|boolean} Retorna o objeto com os dados do jogo ou false se não houver dados no LocalStorage
     */
    getLocalStorage() {
      const lGame = localStorage.getItem("Game");
      return lGame ? JSON.parse(lGame) : false;
    },

    // Cria iframe do jogo e variáveis para o jogo usufruir
    setupGame() {
      gameFrame = document.getElementById("game-frame");

      // Adiciona o iframe com o loading lazy e sem src inicialmente
      gameFrame.insertAdjacentHTML(
        "beforeend",
        `<iframe id="game-iframe" frameborder="0" loading="lazy" tabindex="-1" ></iframe>`
      );

      gameIframe = document.getElementById("game-iframe");

      // Carrega o iframe somente quando o usuário interagir (exemplo: rolagem)
      const loadIframeOnScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const loadPosition = gameFrame.offsetTop;

        if (scrollPosition >= loadPosition) {
          // Definir src e exibir o iframe
          gameIframe.src = "./src/GDevelop/index.html";
          window.removeEventListener("scroll", loadIframeOnScroll);
        }
      };

      window.addEventListener("scroll", loadIframeOnScroll);

      gameIframe.addEventListener("load", () => {
        document.querySelector("#iframe-callback").style.display = "none";
      });

      document.querySelector("#game-wrapper").style.display = "block";

      // Copia do objeto reativo para não usar object proxy
      scormDataJson = JSON.stringify(this.scormData);
      // Expôe como variável global para o jogo conseguir acessar os dados
      window.gameDataJson = scormDataJson;

      this.trackGameCompletion();
    },

    /**
     * Acompanha a conclusão do jogo e atualiza o status SCORM quando concluído.
     *
     * Este método salva os dados no LocalStorage caso o SCORM não esteja funcionando
     * e utiliza um intervalo para verificar se o jogo foi concluído, atualizando o status no SCORM.
     *
     * @return {void} Esta função não retorna um valor.
     */
    trackGameCompletion() {
      // Salva caso SCORM não estiver funcionando
      this.saveLocalStorage();
      const conclusaoInterval = setInterval(() => {
        if (gameIframe.dataset.value === "concluiuScorm") {
          console.log("Concluiu SCORM");
          // Precisa ser arrow function para o this não bugar o código
          // Como o postMessage não funciona, o código verifica de tempos em tempos se o jogador concluiu
          this.saveLocalStorage();
          clearInterval(conclusaoInterval);
          // Conclui SCORM
          finishTopic();
        }
      }, 1000); // Sugiro usar constantes para intervalos
    },
  },

  //html
  template: `
   <div id="game-frame">
      
      <img       
        src="src/img/game-frame.png"
        alt="wrapper"
        loading="lazy"
        id="game-wrapper"
      />
      <div id="iframe-callback">
        <h3>Carregando jogo... </h3>
      </div>


   </div>
   `,
};
