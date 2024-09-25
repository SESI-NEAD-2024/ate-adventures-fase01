import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";

import AppFooter from "./components/app-footer.js";
import Concluir from "./components/concluir.js";

import Introducao from "./components/introducao.js";
import Fliperama from "./components/fliperama.js";

import CursoFase01 from "./components/curso-fase-01.js";

// Lesson Component
const Lesson = {
  template: `
      <div>
          <h1 class="text-2xl font-bold mb-4">Lesson 1: Introduction to SCORM</h1>
          <p>This is a basic lesson on how SCORM works.</p>
          <button class="bg-blue-500 text-white py-2 px-4 rounded" @click="completeLesson">Complete Lesson</button>
      </div>
  `,
  methods: {
    completeLesson() {
      alert("Lesson completed! SCORM tracking will be implemented here.");
      // Aqui você pode adicionar a lógica da API SCORM
    },
  },
  mounted() {
    console.log(123123);
  },
};

// Configuração do Vue Router 4
const routes = [
  { path: "/", component: Fliperama },
  { path: "/introducao", component: Introducao },
  { path: "/lesson", component: Lesson },
  { path: "/curso-fase-01", component: CursoFase01 },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  components: {
    // O vue router já renderiza os componentes aqui
  },
  mounted() {
    /**
     * Oculta o elemento com id "loading" e exibe o elemento com id "content"
     * quando a página está totalmente carregada.
     *
     * @return {void} Esta função não retorna um valor.
     */
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.opacity = "1";
  },
});
app.use(router);
app.mount("#app");
