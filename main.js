const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const familyDB = require("./DB/family.js"); // Import funkcji z family.js

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
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Dodaj preload.js do komunikacji
    },
  });

  win.on("closed", () => {
    win = null;
  });

  win.once("ready-to-show", () => {
    win.show();
    win.webContents.openDevTools(); // Otwiera konsolę deweloperską
  });

  win.webContents.on("did-fail-load", (event, errorCode, errorDescription) => {
    console.warn("DevTools error:", errorDescription);
  });

  win.loadFile("dist/index.html");
});

// Obsługa żądań z UI5
ipcMain.handle("countNamesRepetition", async () => {
  try {
    // Wywołanie funkcji z family.js
    const result = familyDB.countNamesRepetition();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Wysyła błąd do UI5
  }
});
