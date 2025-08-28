const express = require("express");
const http = require("http");
const { WebSocketServer } = require("ws");
const pty = require("node-pty");
const path = require("path");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// --- NEW: List files endpoint ---
app.get("/list-files", (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Failed to list files" });
    }
    res.json(files);
  });
});

// --- Already added earlier: Save endpoint ---
app.post("/save", (req, res) => {
  const { filename } = req.query;
  const { content } = req.body;

  if (!filename) {
    return res.status(400).send("Filename is required");
  }

  const filepath = path.join(__dirname, filename);
  fs.writeFile(filepath, content, (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).send("Failed to save file");
    }
    res.send("File saved successfully");
  });
});

// --- Terminal WebSocket ---
wss.on("connection", (ws) => {
  const shell = process.platform === "win32" ? "cmd.exe" : "bash";
  const ptyProcess = pty.spawn(shell, [], {
    name: "xterm-color",
    cwd: process.cwd(),
    env: process.env,
  });

  ptyProcess.on("data", (data) => ws.send(data));
  ws.on("message", (msg) => ptyProcess.write(msg));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000 " + process.cwd());
});
