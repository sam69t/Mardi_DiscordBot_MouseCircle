const { app, BrowserWindow } = require("electron");

let win = null;

function createWindow() {
  // fonctionnalité d'electron pour créer une nouvelle fenetre
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      // dire que ça fonctionne avec node avec node
      nodeIntegration: true,
    },
  });
  // pour load notre page d'accueil
  win.loadFile("index.html");
  win.setFullScreen(true);
}

function initBot() {
  // On veut seulement la class dans le fichier discordBot
  const DiscordBot = require("./DiscordBot.js").DiscordBot;
  new DiscordBot("ODE1ODYyODIyNjM3Nzk3Mzg4.YDyldg.7aLyKZLMoJiSpk4etYc_gMD44xM");
}

// Pour pointer directement sur l'application quand on lance la commande
app.whenReady().then(createWindow).then(initBot);
app.on("activate", () => {
  // Est-ce qu'il y a une fenetre prete ?
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
