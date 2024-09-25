export default {
  data() {
    return {
      debugWithoutScorm: false,
    };
  },
  mounted() {
    console.log("game-fase-01.js");


    let data = {
      playerName: "Jogador",
      character: "01",
    };

    if (!this.debugWithoutScorm) {
      // Recebe dados SCORM
      if(getScormData(FIELDS.suspendData)){
        data = getScormData(FIELDS.suspendData);        
      }
      // Se a API não iniciar não prejudica o jogo, pois irá informações genéricas para lá
    } 

    data = JSON.stringify(data);

    console.log(data);
    
    const gameIframe = document.getElementById("game-iframe");
    if (gameIframe) {
      // Expôe como variável global
      window.gameDataJson = data;
    }
  },

  //html
  template: `
   <div id="game-frame">
      <iframe id="game-iframe" src="./src/GDevelop/index.html" frameborder="0"></iframe>
   </div>
   `,
};
