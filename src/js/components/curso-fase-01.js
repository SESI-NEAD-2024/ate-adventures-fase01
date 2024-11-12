// Importar componentes usados na página

import Navbar from "./navbar.js";
import Hero from "./hero.js";
import AppFooter from "./app-footer.js";
import Concluir from "./concluir.js";
import Nucleos from "./nucleos.js";
import GameFase01 from "./game-fase-01.js";

export default {
  name: "CursoFase01",
  data() {
    return {
      scormData: null,
      stopNavbar: null,
      stopNavBarHeight: 0,
      // Posição Atual do Scroll
      // let winScroll = window.scrollY + window.innerHeight;
      winScroll: 0,
    };
  },
  components: {
    Navbar,
    Hero,
    AppFooter,
    Concluir,
    Nucleos,
    GameFase01,
  },
  mounted() {
    console.log("curso-fase-01.js");

    // AOS Animation -------------------------------------
    AOS.init({
      delay: 50,
    });

    window.addEventListener("load", () => {
      AOS.refresh(); // Força a recalculação das animações após o carregamento da página

      // Scroll -----------------------------------------------------
      // Quando a janela encostar neste elemento, completa a barra de progresso 100%
      this.stopNavbar = document.querySelector(".stop-navbar");
      this.stopNavBarHeight = this.getAbsoluteOffsetTop(this.stopNavbar);
    });
    // Precisei repetir para carregar, o evento load parece não carregar aqui
    this.stopNavbar = document.querySelector(".stop-navbar");
    this.stopNavBarHeight = this.getAbsoluteOffsetTop(this.stopNavbar);

    // Toolltip
    var tooltipes = document.querySelectorAll(".tooltipped");
    var mTooltip = M.Tooltip.init(tooltipes, {
      // specify options here
    });

    // Adiciona o evento de scroll
    window.addEventListener("scroll", this.handleScroll);

    // AccordionSlider
    let mySlider = new AccordionSlider("#my-accordion", {
      width: "100%",
      height: "60vh",
      autoplay: true,
      panelDistance: 16,
      startPanel: 0,
      responsive: true,
      mouseWheel: false,
      breakpoints: {
        800: { visiblePanels: 3, orientation: "vertical", height: "55vh" },
        500: { visiblePanels: 3, orientation: "vertical", height: "55vh" },
      },
    });

    this.setupCharacter();

    // Scroll -----------------------------------------------------

    // Usa o throttle na função handleScroll e vincula ao evento de scroll
    const throttledScroll = this.throttle(this.handleScroll, 150); // Ajuste o delay conforme necessário
    window.addEventListener("scroll", throttledScroll);
  },
  methods: {
    // Barra de progresso Scroll -----------------------------------------------------

    // Função de throttle
    throttle(callback, delay) {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return callback(...args);
      };
    },

    /**
     * Atualiza a barra de progresso e exibe a porcentagem rolada.
     *
     * Esta função calcula a porcentagem rolada com base na posição de rolagem do usuário. Em seguida, atualiza a largura da barra de progresso e exibe a porcentagem rolada na caixa de progresso.
     *
     * @return {void} Esta função não retorna nenhum valor.
     */
    handleScroll() {
      this.winScroll = window.scrollY;

      let pageHeight = document.body.scrollHeight;

      // console.log('winScroll', winScroll);
      // console.log('pageHeight', pageHeight);

      // Transforma valor em porcentagem de 1 a 100
      var scrolled = Math.min(
        (this.winScroll / (this.stopNavBarHeight - window.innerHeight)) * 100,
        100
      );

      // Atualiza a barra de progresso
      var barras = document.querySelectorAll(".determinate");

      barras.forEach((barra) => {
        barra.style.width = scrolled + "%";
      });

      // Para sumir/aparecer a barra de progresso quando está prestes a aparecer o jogo
      // Para não verificar toda hora

      if (scrolled >= 97) {
        document.querySelector(".navbar-fixed").classList.add("scale-out");
        document.querySelector(".navbar-fixed").classList.remove("scale-in");
      } else {
        document.querySelector(".navbar-fixed").classList.add("scale-in");
        document.querySelector(".navbar-fixed").classList.remove("scale-out");
      }

      // console.log("this.winScroll", this.winScroll);
      // console.log("scrolled", scrolled);

      // console.log("stopNavBarHeight", this.stopNavBarHeight);
    },

    getAbsoluteOffsetTop(element) {
      // Posição do elemento na viewport
      const rect = element.getBoundingClientRect();
      return rect.top + window.scrollY + window.innerHeight;
    },

    getLocalStorage() {
      const lGame = localStorage.getItem("Game");
      return lGame ? JSON.parse(lGame) : false;
    },

    setupCharacter() {
      if (this.getLocalStorage()) {
        this.scormData = this.getLocalStorage();
        let characters = document.querySelectorAll(".characters-item");
        characters[Number(this.scormData.Personagem) - 1].classList.add(
          "characters-selected"
        );
      }
    },
  },
  beforeDestroy() {
    // Remove o listener de scroll ao destruir o componente
    window.removeEventListener("scroll", this.handleScroll);
  },

  //html
  template: `
   <!-- Navbar ---------------------------------- -->
        <navbar></navbar>

        <!-- Hero Banner ---------------------------------- -->
        <hero>
          <div>
            <img
              src="src/img/core/ATE-logo-hero.png"
              alt="ATE Adventures"
              style="max-width: 778px; width: 100%"
            />
            <h2 class="mt-80">FASE 1</h2>
            <br />
            <span class="display1">QUEM É O ATE?</span>
          </div>
          ​</hero
        >
        <img
          class="game-divisor mt-24 mt-0-mobile"
          src="src/img/plataform-hero.webp"
          alt="Game Pixel Art"
        />

        <!-- QUEM É O ATE? ---------------------------------- -->
        <div id="ate" class="">
          <div class="ate-bg-01">
            <div class="container">

              <!-- ACCORDION SLIDER -->
              <div class="accordion-slider mt-96 mb-80-tablet" id="my-accordion">
                <div class="as-panels">
                  <!-- Panel 1 -->
                  <div class="as-panel">
                    <img
                      class="as-background"
                      src="src/img/carousel-1.webp"
                      loading="lazy"
                    />
                  </div>

                  <!-- Panel 2 -->
                  <div class="as-panel">
                    <img
                      class="as-background"
                      src="src/img/carousel-2.webp"
                      loading="lazy"
                    />
                  </div>

                  <!-- Panel 3 -->
                  <div class="as-panel">
                    <img
                      class="as-background"
                      src="src/img/carousel-3.webp"
                      loading="lazy"
                    />
                  </div>

                  <!-- Panel 4 -->
                  <div class="as-panel">
                    <img
                      class="as-background"
                      src="src/img/carousel-4.webp"
                      loading="lazy"
                    />
                  </div>

                  <!-- Panel 5 -->
                  <div class="as-panel">
                    <img
                      class="as-background"
                      src="src/img/carousel-5.webp"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <!-- FIM ACCORDION SLIDER -->
            </div>

            <div class="container--medium mt-40">
              <p class="mb-40">
                Devido ao crescimento exponencial das atividades tecnológicas
                nas escolas da Rede SESI/DRMG, a Gerência de Educação Básica
                (GEB) reconheceu a importância de ter em cada unidade um
                profissional dedicado ao apoio e inovação em educação
                tecnológica. Por isso, decidiram contratar o Assistente de
                Tecnologias Educacionais (ATE), que é uma referência para
                professores e alunos, ajudando a integrar e utilizar as
                tecnologias de forma eficaz no dia a dia escolar.
              </p>
              <div class="characters flex--justify-between">
                <div
                  class="characters-item flex--align-center flex--justify-center"
                >
                  <img src="src/img/player-01.svg" alt="Player" lang="lazy" />
                </div>
                <div
                  class="characters-item flex--align-center flex--justify-center"
                >
                  <img src="src/img/player-02.svg" alt="Player" lang="lazy" />
                </div>
                <div
                  class="characters-item flex--align-center flex--justify-center"
                >
                  <img src="src/img/player-03.svg" alt="Player" lang="lazy" />
                </div>
                <div
                  class="characters-item flex--align-center flex--justify-center"
                >
                  <img src="src/img/player-04.svg" alt="Player" lang="lazy" />
                </div>
              </div>
              <div class="box-attention box-attention--image mt-40">
                <div data-aos="fade-right" class="box-icon mr-24">
                  <img src="src/img/star.gif" alt="Star" loading="lazy" />
                </div>
                <h5>
                  A função do ATE é contribuir para a consolidação da cultura da
                  inovação e para o desenvolvimento e execução dos projetos que
                  envolvem a educação tecnológica na unidade.
                </h5>
              </div>
            </div>
          </div>
          <div class="ate-bg-02 py-80">
            <div class="container--medium">
              <p>
                Ao lado da equipe pedagógica da unidade, o ATE vai atuar nas
                ações de educação tecnológica e responder pela organização e o
                controle do uso dos equipamentos nas escolas SESI.
              </p>
              <h4 class="center-align">
                As principais atribuições dos ATEs são:
              </h4>
              <p class="center-align">Interaja para revelar</p>
              <!-- REVELA ICONES -->
              <div class="icons-reveal">
                <div class="row mb-24 mb-0-mobile">
                  <div class="col l3 m1 s12"></div>
                  <div class="col l6 m10 s12">
                    <div class="flex--justify-center">
                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-01"
                      >
                        <img
                          src="src/img/atribuicao-01.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-01"
                          style="display: none"
                        >
                          <p>
                            Organizar e zelar pelos equipamentos para o uso na
                            educação tecnológica na unidade:
                          </p>
                          <p>
                            - A unidade possui diversos recursos, como tablets,
                            notebooks, Labdisc, impressora 3D, entre outros. É
                            fundamental que o ATE preze pela identificação,
                            organização e conservação dos equipamentos,
                            assegurando uma estrutura para que os professores
                            possam realizar o agendamento e assegurar que esses
                            equipamentos estejam disponíveis e em bom estado
                            para o uso.
                          </p>
                        </div>
                      </div>

                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-02"
                      >
                        <img
                          src="src/img/atribuicao-02.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-02"
                          style="display: none"
                        >
                          <p>
                            Apoiar os professores nas atividades que usem
                            tecnologia em sala de aula:
                          </p>
                          <p>
                            - Oferece suporte aos professores em práticas que
                            usem tecnologias, abrangendo todas as etapas do
                            processo. Isso inclui ajudar no planejamento,
                            identificando as ferramentas tecnológicas mais
                            adequadas para alcançar os objetivos pedagógicos do
                            professor e apoiar a execução dessas práticas em
                            sala, oferecendo suporte técnico e orientando uso
                            adequado do equipamento.
                          </p>
                        </div>
                      </div>

                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-03"
                      >
                        <img
                          src="src/img/atribuicao-03.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-03"
                          style="display: none"
                        >
                          <p>
                            Promover programas de capacitação e treinamento
                            destinados aos professores sobre as tecnologias
                            adotadas pela unidade:
                          </p>
                          <p>
                            - Em parceria com a equipe pedagógica, promove
                            capacitações para o corpo docente, garantindo que os
                            professores estejam preparados para usar as
                            ferramentas disponíveis na unidade. Esse processo
                            começa com a identificação das necessidades de
                            treinamento e das competências que os docentes
                            precisam desenvolver para integrar efetivamente
                            essas tecnologias em seu ensino.
                          </p>
                        </div>
                      </div>

                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-04"
                      >
                        <img
                          src="src/img/atribuicao-04.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-04"
                          style="display: none"
                        >
                          <p>
                            Treinar a equipe de robótica ou F1 in Schools.
                            Oferecer apoio aos técnicos durante os treinamentos
                            das equipes:
                          </p>
                          <p>
                            - O ATE pode ser indicado como técnico ou suplente
                            da equipe de robótica ou F1 in Schools, auxiliando
                            no desenvolvimento de habilidades de liderança,
                            resolução de problemas e colaboração. Ele apoia a
                            equipe em aspectos técnicos e também em questões
                            organizacionais e estratégicas. Mesmo quando não
                            estiver atuando diretamente nesses papéis, o ATE
                            deve oferecer suporte contínuo aos técnicos e
                            suplentes, conforme as necessidades da equipe e da
                            unidade, além de ajudar na organização do ambiente
                            de treinamento e em outras demandas necessárias.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flex--justify-center">
                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-05"
                      >
                        <img
                          src="src/img/atribuicao-05.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-05"
                          style="display: none"
                        >
                          <p>
                            Apoiar a área pedagógica na implantação de
                            iniciativas e soluções educacionais que usem
                            ferramentas tecnológicas:
                          </p>
                          <p>
                            - Envolve colaborar com a equipe pedagógica
                            iniciativas e soluções educacionais que usem
                            ferramentas tecnológicas, atuando no planejamento,
                            implementação e acompanhamento dessas frentes. No
                            planejamento, o ATE, junto à equipe pedagógica,
                            ajuda a identificar necessidades e selecionar as
                            ferramentas adequadas como softwares educativos,
                            plataformas on-line, equipamentos. Na implementação,
                            o ATE oferece suporte técnico e treinamentos às
                            pessoas envolvidas. No acompanhamento, avalia o
                            impacto com a equipe pedagógica e realiza ajustes
                            para garantir que as iniciativas alcancem seus
                            objetivos e tenham um efeito positivo na
                            aprendizagem.
                          </p>
                        </div>
                      </div>

                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-06"
                      >
                        <img
                          src="src/img/atribuicao-06.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-06"
                          style="display: none"
                        >
                          <p>
                            Apoiar as unidades no uso de equipamentos e recursos
                            tecnológicos digitais:
                          </p>
                          <p>
                            - Orientar todos os atores envolvidos no processo de
                            ensino e aprendizagem sobre as possibilidades de
                            cada recurso disponível na unidade e o manuseio
                            adequado.
                          </p>
                        </div>
                      </div>

                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-07"
                      >
                        <img
                          src="src/img/atribuicao-07.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-07"
                          style="display: none"
                        >
                          <p>
                            Atuar com a equipe pedagógica, planejando e propondo
                            ações que envolvam as tecnologias na escola:
                          </p>
                          <p>
                            - Realiza curadoria dos materiais disponíveis na
                            Rede SESI Minas ou propõe ações, quando necessárias,
                            alinhadas ao planejamento do professor e validadas
                            pela equipe pedagógica. Essa atuação conjunta é
                            essencial para garantir que as propostas estejam
                            ajustadas com as necessidades pedagógicas.
                          </p>
                        </div>
                      </div>

                      <!-- Tooltip -->
                      <div
                        class="box-icon tooltipped pointer"
                        data-html="true"
                        data-position="bottom"
                        data-tooltip-id="tooltip-content-08"
                      >
                        <img
                          src="src/img/atribuicao-08.svg"
                          alt="Atribuição ATE"
                          loading="lazy"
                        />
                        <div
                          class="tip"
                          id="tooltip-content-08"
                          style="display: none"
                        >
                          <p>
                            Executar outras tarefas correlatas a critério da
                            gerência:
                          </p>
                          <p>
                            - Envolve realizar atividades que são essenciais
                            para promover a educação tecnológica na rede, como:
                            participar de projetos especiais, colaborar em
                            eventos institucionais, dar assistências em
                            iniciativas temporárias que façam uso dos recursos
                            tecnológicos disponíveis na rede, entre outras.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col l3 m1 s12"></div>
                </div>
              </div>
              <!-- FIM REVELA ICONES -->
            </div>
          </div>
        </div>

        <!-- ESTRUTURA ORGANIZACIONAL ------------------------------------>
        <div class="center-align py-80 bg-blue-04 star-bg">
          <div class="container--medium center-align">
            <img
              class="question-img"
              src="src/img/question.png"
              alt="Pergunta"
              loading="lazy"
              style="max-width: 50px; width: 100%"
            />
            <h4
              class="mt-24"
              style="max-width: 500px; width: 100%; margin: auto"
            >
              E você sabe quem é responsável pela gestão técnica das escolas
              SESI Minas?
            </h4>
          </div>
        </div>
        <div class="py-80">
          <div class="container--medium">
            <h1 data-aos="fade-up" class="center-align mb-40">
              ESTRUTURA ORGANIZACIONAL
            </h1>
            <p>
              A Gerência de Educação Básica (GEB) é a área responsável pela
              gestão pedagógica das escolas do SESI/MG e tem como objetivo da
              sua atuação, idealizar, planejar e estruturar o ensino na Rede
              visando a unicidade e a melhores resultados a cada ano,
              fortalecendo as equipes gestoras das escolas.
            </p>
            <p class="mb-40">A GEB é composta por 5 núcleos:</p>
            <img
              src="src/img/GEB.webp"
              alt="GEB"
              loading="lazy"
              style="width: 100%"
            />
          </div>
        </div>

        <!-- NUCLEOS ------------------------------------>
        <nucleos></nucleos>

        <!-- NITE ------------------------------------>
        <div id="nite" class="center-align">
          <div class="nite-bg-01 bg-blue-03 py-60">
            <div class="container--medium">
              <div class="row">
                <div class="col m2 s12 flex--align-center plus">
                  <img
                    src="src/img/plus.png"
                    alt="+"
                    loading="lazy"
                    style="width: 100%; max-width: 60px"
                  />
                </div>
                <div class="col m9 s12 flex--align-center">
                  <p class="left-align">
                    No vídeo a seguir, você vai aprender um pouco mais sobre o
                    Núcleo de Inovação e Tecnologias Educacionais (NITE), que é
                    responsável por planejar e executar projetos inovadores e de
                    educação tecnológica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="nite-bg-02 py-80 pb-0-tablet nite-anchor">
            <div class="container">
              <h1
                data-aos="fade-up"
                data-aos-anchor=".nite-anchor"
                class="mb-40"
              >
                O NITE
              </h1>

              <div class="row">
                <div class="col m1 s12"></div>
                <div class="col m10 s12">
                  <div class="video-box pointer">
                    
                    <iframe src="https://prezi.com/p/embed/U2D1vMP6TisE2UVmEUAY/" id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" height="315" width="560"></iframe>
                  </div>
                </div>
              </div>
              <!-- Video -->
            </div>
          </div>
        </div>

        <!-- PRÉ JOGO ------------------------------------>
        <div id="pre-game" class="pt-80 center-align flex--justify-center stop-navbar">
          <div>
            <div class="container">
              <div style="max-width: 600px; margin: auto">
                <h3 class="white-text">
                  Nesta primeira fase, você aprendeu sobre a rotina do ATE, a
                  Gerência de Educação Básica (GEB) e sobre o papel do NITE.
                </h3>
                <h4 class="white-text my-40 ">
                  Agora, responda às perguntas do jogo a seguir.
                </h4>
                <div
                  class="mb-40 box-attention box-attention--image left-align "
                >
                  <div data-aos="fade-right" class="box-icon mr-24">
                    <img src="src/img/medal.gif" alt="Medalha" loading="lazy" />
                  </div>
                  <h5>
                    Ao acertar todas as questões, você ganhará uma estrela, que
                    o ajudará a receber a insígnia de Super ATE. PREPARADO?
                  </h5>
                </div>
                <img
                  class=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  src="src/img/Up.png"
                  alt="Up"
                  loading="lazy"
                />
              </div>
            </div>
            <img
              class="game-divisor mt-24"
              src="src/img/blocks-base-02.png"
              alt="Game Pixel Art"
              style="margin-bottom: -5px"
            />
          </div>
        </div>


        <game-fase-01></game-fase-01>

        <!-- Footer ---------------------------------- -->
        <app-footer></app-footer>


        
         

   `,
};
