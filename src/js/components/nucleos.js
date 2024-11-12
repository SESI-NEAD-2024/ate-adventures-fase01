
export default {
  data() {
    return {
      idSelected: 0,
      images: ['0', '1', '2', '3', '4'],
      items: [
        {
          id: 0,
          //html
          html: `
            <h4 class="white-text">Núcleo de Educação a Distância</h4>
            <p class="white-text">
              Núcleo responsável por ações educacionais na modalidade EaD de forma coordenada com os demais núcleos. 
            </p>
              `,
        },

        {
          id: 1,
          //html
          html: `
<h4 class="white-text">Núcleo Pedagógico</h4>

            <p class="white-text">

              Núcleo responsável pelo acompanhamento da prática pedagógica nas escolas. Busca contribuir com o aprimoramento das práticas pedagógicas na articulação dos processos e formação de professores.

            </p>
              `,
        },
        {
          id: 2,
          //html
          html: `
          <h4 class="white-text">Núcleo de Regulamentação Escolar
</h4>

            <p class="white-text">
Núcleo responsável por monitorar a legalidade do funcionamento das escolas, estabelecendo a comunicação com os órgãos fiscalizadores da Secretária de Estado de Educação, atuando na disseminação e aplicabilidade das legislações educacionais.
            </p>
              `,
        },
        {
          id: 3,
          //html
          html: `
                    <h4 class="white-text">Núcleo de Inovação e Tecnologias Educacionais</h4>


            <p class="white-text">
Núcleo responsável por pensar, refletir, analisar, planejar e executar projetos inovadores para a educação. Busca potencializar e contribuir para a inovação e para a construção de estratégias pedagógicas, elevando a qualidade do ensino na REDE SESI de Educação.
            </p>
              `,
        },
        {
          id: 4,
          //html
          html: `
                    <h4 class="white-text">NIE – Núcleo de Infraestrutura Educacional</h4>
            <p class="white-text">
Promove a inovação educacional, alinhada à tecnologia e à infraestrutura das escolas, estabelecendo uma interface entre todos os núcleos da GEB.
            </p>
            <p class="white-text">
            <b>Foco:</b> proposição de inovação educacional na perspectiva da tecnologia e da infraestrutura das escolas, em alinhamento com o acompanhamento pedagógico realizado pelos núcleos da GEB.
            </p>
            <p class="white-text">
            <b>Elaboração de projetos de melhoria:</b>Elaboração de projetos de melhoria: desenvolvimento de projetos de melhoria com foco em inovação educacional, em diálogo com os núcleos da GEB.
            </p>
            <p class="white-text">
            <b>Acompanhamento de novas unidades:</b> supervisionar a implementação das novas unidades, garantindo o alinhamento com a proposta de inovação das escolas SESI.
            </p>
              `,
        },
      ],
    };
  },
  methods: {
    menu(event, menuOption) {
      // Remove a classe de todos os elementos
      let nucleosItems = document.getElementsByClassName("nucleos-item");
      for (var i = 0; i < nucleosItems.length; i++) {
        nucleosItems[i].classList.remove("display1");
      }
  
      // Adiciona a classe para o item clicado
      event.target.classList.add("display1");
  
      // Define o conteúdo atual selecionado
      this.idSelected = menuOption;
  
      // Troca a imagem de fundo
      this.updateBackgroundImage();
    },
    updateBackgroundImage() {
      let nucleos = document.querySelector('.nucleos');
      let url = `./src/img/${this.idSelected}-nucleos.jpg`;
      nucleos.style.backgroundImage = `url(${url})`;
    }
  },
  mounted() {
    // Pré-carrega todas as imagens
    this.images.forEach(imageName => {
      const img = new Image();
      img.src = `./src/img/${imageName}-nucleos.jpg`;
    });
  
    // Define a imagem de fundo inicial
    this.updateBackgroundImage();
  },

  

  template: //html
  `
      <div class="nucleos" :data-order="idSelected">
          <div class="filter"></div>
          <div class="mask-top"></div>
          <div class="py-144 ">
            <div class="container--medium content">
              <div class="row">
                <div class="col m4 s3 nucleos-menu">
                  <ul>
                    <li @click="menu($event, 0)" class="pointer nucleos-item display1">NEAD</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item">NUPE</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item">NURE</li>
                    <li @click="menu($event, 3)" class="pointer nucleos-item">NITE</li>
                    <li @click="menu($event, 4)" class="pointer nucleos-item">NIE</li>
                  </ul>
                </div>
                <div class="col m8 s9 flex--align-center">
                  <div v-html="items[idSelected].html">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mask-bottom"></div>
        </div>
    `,
};
