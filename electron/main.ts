import { app, BrowserWindow, shell } from "electron";
import path from "node:path";

import nodeChildProcess from "child_process";
import { ipcMain } from "electron";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    maxWidth: 400,
    minWidth: 400,
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  win = null;
});

ipcMain.handle("runWindowsScript", () => {
  // shell.openExternal("file:/switchgit/src/scripts/test.bat");
  // shell.showItemInFolder("file:/E:/switchgit/src/scripts/test.bat");
  shell.openExternal("file:/E:/switchgit/src/scripts/test.bat");
  // shell.beep();

  // let script = nodeChildProcess.spawn("cmd.exe", [
  //   "/c",
  //   "test.bat",
  //   "arg1",
  //   "arg2",
  // ]);
  // // MacOS & Linux
  // // let script = nodeChildProcess.spawn('bash', ['test.sh', 'arg1', 'arg2']);
  // console.log("PID: " + script.pid);
  // script.stdout.on("data", (data) => {
  //   console.log("stdout: " + data);
  // });
  // script.stderr.on("data", (err) => {
  //   console.log("stderr: " + err);
  // });
  // script.on("exit", (code) => {
  //   console.log("Exit Code: " + code);
  // });
});

app.whenReady().then(createWindow);
