let gameFrame = null;
let gameIframe = null;
let scormDataJson = null;

export default {
  data() {
    return {
      debugWithoutScorm: false,
      scormData: null,
    };
  },
  mounted() {
    // O Iframe aparece apenas quando o HTML é carregado e quando a API SCORM iniciada

    // Usei alguns trechos de código do arquivo scorm-app.js
    if (scormAPI) {
      console.log("scormAPI");

      var interval = setInterval(() => {
        console.log("PRE LMSIsInitialized");

        if (LMSIsInitialized()) {
          // Quando tudo estiver carregado e pronto para funcionar

          console.log("LMSIsInitialized");

          clearInterval(interval);

          // Recebe dados SCORM
          if (getScormData(FIELDS.suspendData)) {
            this.scormData = getScormData(FIELDS.suspendData);
            // Converte de JSON para um objeto
            this.scormData = JSON.parse(this.scormData);
          }

          this.setupGame();
        }
      });
    } else {
      // Se a API não iniciar não prejudica o jogo totalmente, pois irá informações genéricas para lá
      // E dá para debugar aqui sem o SCORM

      this.scormData = {
        Jogador_Nome: "Jogador",
        Personagem: "01",
        Fase_Concluida: false,
      };

      this.setupGame();
    }
  },
  methods: {

    // Cria iframe do jogo e variáveis para o jogo usufruir
    setupGame() {
      
      gameFrame = document.getElementById("game-frame");
      gameFrame.innerHTML =
        //html
        `<iframe data-value="" id="game-iframe" src="./src/GDevelop/index.html" frameborder="0"></iframe>`;

      gameIframe = document.getElementById("game-iframe");
      if (gameIframe) {
        // Copia do objeto reativo para não usar object proxy
        scormDataJson = JSON.stringify(this.scormData);
        // Expôe como variável global para o jogo conseguir acessar os dados
        window.gameDataJson = scormDataJson;

        this.gameResponse();
      }
    },
    gameResponse() {
      // Precisa ser arrow function para o this não bugar o código
      // Como o postMessage não funciona, o código verifica de tempos em tempos se o jogador concluiu

      // Verifica a cada 1s se o jogador concluiu
      var conclusaoInterval = setInterval(() => {
        if (gameIframe.dataset.value === "concluiuScorm") {
          console.log("concluiuScorm");

          this.scormData.Fase_Concluida = true;
          scormDataJson = JSON.stringify(this.scormData);

          // Salva no SCORM
          saveSuspendData(scormDataJson);
          // Conclui SCORM
          finishTopic();
          clearInterval(conclusaoInterval);
        }
      }, 1000);
    },
  },

  //html
  template: `
   <div id="game-frame">
      
   </div>
   `,
};
