export default {
  name: "AppFooter",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  template: //html
   `
    <footer>
      <div class="container ">
        <div>
          <img src="src/img/core/ATE-logo.png" alt="Logo ATE" />
        </div>
        <div>
          <p class="center-align white-text">© Sesi {{ year }}. Todos os direitos reservados.</p>
        </div>
        <div>
          <img src="src/img/core/logo-ead_sesi.webp" alt="Logo Sesi Ead" />
        </div>
      </div>
    </footer>
  `,
};
