const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const DATA_FILE = path.join(__dirname, "pastes.json");

app.use(bodyParser.json());
// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

function readPastes() {
  // Ensure file exists
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]), "utf8");
  }
  // Read and parse JSON safely
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return raw.trim() ? JSON.parse(raw) : [];
  } catch (err) {
    // If JSON parsing fails, reset file
    fs.writeFileSync(DATA_FILE, JSON.stringify([]), "utf8");
    return [];
  }
}

function writePastes(pastes) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(pastes, null, 2), "utf8");
}

// Create a new paste
app.post("/api/pastes", (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) {
    return res.status(400).json({ error: "Name and text are required." });
  }
  const pastes = readPastes();
  const id = Date.now().toString();
  const paste = { id, name, text };
  pastes.push(paste);
  writePastes(pastes);
  res.json({ id });
});

// Get a paste by ID
app.get("/api/pastes/:id", (req, res) => {
  const pastes = readPastes();
  const paste = pastes.find((p) => p.id === req.params.id);
  if (!paste) {
    return res.status(404).json({ error: "Paste not found." });
  }
  res.json(paste);
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
