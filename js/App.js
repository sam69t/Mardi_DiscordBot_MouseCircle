const { ipcRenderer } = require("electron");

class App {
  constructor() {
    console.log("LOG depuis la page HTML");
    this.initListeners();
  }

  initListeners() {
    ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
  }

  onMessage(event, message) {
    console.log(message);
  }
}

window.onload = () => {
  new App();
};
