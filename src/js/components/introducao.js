export default {
  data() {
    return {
      formData: {
        Jogador_Nome: null,
        Personagem: null,
      },
      submitted: false,
      debugWithoutScorm: false,
    };
  },
  mounted() {
    console.log("Componente INTRODUCAO");
    console.log(FIELDS.suspendData);
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      if (
        this.submitted &&
        this.formData.Jogador_Nome != null &&
        this.formData.Personagem != null
      ) {
        this.saveToScorm();
        // Direciona para o curso
        this.$router.push("/curso-fase-01");
      }
    },

    /**
     * Salva os dados do formulário no SCORM
     * Usa função do arquivo 'scorm-app.js'
     * @private
     */
    saveToScorm() {
      // Salva dados em formato JSON
      let save = JSON.stringify(this.formData);
      if (!this.debugWithoutScorm) {
        
        saveSuspendData(save);
        console.log(FIELDS.suspendData);
        console.log(getScormData(FIELDS.suspendData));
      }


    },
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

  
  template: //html
  `
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
