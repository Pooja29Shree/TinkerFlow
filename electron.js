import { app, BrowserWindow, nativeTheme, Menu, session } from "electron";
import { spawn } from "child_process";
import waitOn from "wait-on";

let mainWindow;
let servers = [];

function startServer(command, args, options = {}) {
  const proc = spawn(command, args, { stdio: "inherit", shell: true, ...options });
  servers.push(proc);
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      webSecurity: true
    }
  });

  // Force light mode
  nativeTheme.themeSource = "light";

  const frontendURL = "http://localhost:5173";

  try {
    await waitOn({ resources: [frontendURL], timeout: 30000 });
    mainWindow.loadURL(frontendURL);
  } catch (err) {
    console.error("Frontend server did not start in time:", err);
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  // Disable menu bar
  Menu.setApplicationMenu(null);

  // Handle media requests
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === "media") {
      callback(true);
    } else {
      callback(false);
    }
  });

  // Some OSes (esp. macOS) need explicit media access flags
  app.commandLine.appendSwitch("use-fake-ui-for-media-stream"); // auto-accept mic without prompt
  app.commandLine.appendSwitch("enable-features", "MediaStream");

  // Start servers
  startServer("npm", ["start"], { cwd: "./backend" });
  startServer("node", ["terminal.js"], { cwd: "./code_interpreter" });
  startServer("npm", ["run", "start-frontend"]);

  createWindow();
});

app.on("before-quit", () => {
  servers.forEach((proc) => proc.kill());
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
