const electron = require("electron");
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const template = [
  {
    label: "Help",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

let win;

app.on("ready", () => {
  win = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.on("closed", () => {
    win = null;
  });

  win.once("ready-to-show", () => {
    win.show();
    win.webContents.openDevTools(); // Otwiera konsolę deweloperską
  });

  win.loadFile("dist/index.html");
});
