
export default {
  data() {
    return {
      idSelected: 0,
      items: [
        {
          id: 0,
          //html
          html: `
            <h4 class="white-text">Núcleo de Educação à Distância</h4>
            <p class="white-text">
              Núcleo responsável por ações educacionais no formato EAD de forma coordenada com os demais núcleos. 
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
                    <h4 class="white-text">Núcleo de Inovação e Tecnologias Educacionais


            <p class="white-text">
Núcleo responsável por pensar, refletir, analisar, planejar e executar projetos inovadores para a educação. Busca potencializar e contribuir para a inovação e para a construção de estratégias pedagógicas, elevando a qualidade do ensino na REDE SESI de Educação.
            </p>
              `,
        },
      ],
    };
  },
  methods: {
    menu(event, menuOption) {
      // Remove classe de todos
      let nucleosItems = document.getElementsByClassName("nucleos-item");
      for (var i = 0; i < nucleosItems.length; i++) {
        nucleosItems[i].classList.remove("display1");
      }

      // Adiciona a classe para o item clicado
      event.target.classList.add("display1");

      // Conteúdo atual selecionado para mostrar html
      this.idSelected = menuOption;

      // Troca Background image
      let nucleos = document.querySelector('.nucleos');
      let url = './src/img/'+this.idSelected+'-nucleos.jpg';
      nucleos.style.backgroundImage = `url(${url})`;
    },
  },
  mounted() {
    // Troca Background image
    let nucleos = document.querySelector('.nucleos');
    let url = './src/img/'+this.idSelected+'-nucleos.jpg';
    nucleos.style.backgroundImage = `url(${url})`;
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
