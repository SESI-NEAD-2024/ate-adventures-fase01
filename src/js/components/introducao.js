export default {
  data() {
    return {
      formData: {
        Jogador_Nome: null,
        Personagem: null,
        student_name: null,
        student_id: null,
      },
      submitted: false,
      debugWithoutScorm: false,
    };
  },
  mounted() {
    console.log("introducao.js");
  },
  methods: {
    // Ao enviar formulário
    handleSubmit() {
      this.submitted = true;

      // Se formulário enviado e todos os campos preenchidos
      if (
        this.submitted &&
        this.formData.Jogador_Nome != null &&
        this.formData.Personagem != null
        // scormAPI
      ) {
        if (typeof scormAPI !== "undefined" && scormAPI) {

          var interval = setInterval(() => {

            if (LMSIsInitialized()) {
              // Quando tudo estiver carregado e pronto para funcionar


              clearInterval(interval);
              console.log('getScormData(FIELDS.studentId)', getScormData(FIELDS.studentId));
              console.log('getScormData(FIELDS.studentName)', getScormData(FIELDS.studentName));
              // Identificador de pessoa
              this.formData.student_name = getScormData(FIELDS.studentName);
              this.formData.student_id = getScormData(FIELDS.studentId);
              this.saveLocalStorage();
              // Direciona para o curso
              this.$router.push("/curso-fase-01");
            }
          });
        } else {

          this.saveLocalStorage();
          // Direciona para o curso
          this.$router.push("/curso-fase-01");
        }
      }
    },

    saveLocalStorage() {
      // Salva dados em formato JSON
      let save = JSON.stringify(this.formData);
      if (!this.debugWithoutScorm) {
        localStorage.setItem("Game", save);
      }
    },

    // Customizar card do personagem ao selecionar
    selectPersonagem(event, id) {
      // Remove classe de todos
      let items = document.getElementsByClassName("characters-item");
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("characters-selected");
      }

      if (event.currentTarget.tagName.toLowerCase() === "label") {
        // Adiciona a classe para o item clicado
        event.currentTarget.classList.add("characters-selected");
      }

      // Valor do radio selecionado

      this.Personagem = id;

      // OBS.: Essa lógica não está boa, o ideal seria controlar tudo com base no valor recebido do
      // input radio para funcionar de maneira geral em outras partes do projeto
    },
  },

  //html
  template: `
   <div class="introducao-game  flex--align-center flex--justify-center">
    <div class="container--medium center-align">
      <h1 class="mb-40">ESCOLHA SEU PERSONAGEM</h1>
      <h1 id="debug"></h1>
      <form action="get" class="mt-80" required @submit.prevent="handleSubmit()">
        <div class="characters flex--justify-between">
          <label
            @click="selectPersonagem($event, '01')"
            class="mr-24-tablet mb-24-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-01.svg" alt="Player" />
            <input type="radio" name="Personagem" value="01" v-model="formData.Personagem" required />
          </label>
          <label
            @click="selectPersonagem($event, '02')"
            class="mb-24-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-02.svg" alt="Player" />
            <input type="radio" name="Personagem" value="02" v-model="formData.Personagem" required />
          </label>
          <label
            @click="selectPersonagem($event, '03')"
            class="mr-24-tablet mb-0-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-03.svg" alt="Player" />
            <input type="radio" name="Personagem" value="03" v-model="formData.Personagem" required />
          </label>
          <label
            @click="selectPersonagem($event, '04')"
            class="mb-0-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-04.svg" alt="Player" />
            <input type="radio" name="Personagem" value="04" v-model="formData.Personagem" required />
          </label>
        </div>

        <div class="form-bottom">
        <input
          v-model="formData.Jogador_Nome"
          id="name"
          class="mr-40 mr-0-mobile mb-24-mobile"
          type="text"
          placeholder="Insira seu nome aqui"
          required
        />
        <input
          class="btn game"
          type="submit"
          placeholder="COMEÇAR AVENTURA"
        />
        </div>
      </form>
  </div>
 </div>
      `,
};
