// npm install express cors sqlite3


const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./profiles.db", (err) => {
  if (err) console.error(err.message);
  console.log("Connected to SQLite database.");
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS profiles (id INTEGER PRIMARY KEY, name TEXT UNIQUE)`);

// Fetch all profiles
app.get("/profiles", (req, res) => {
  db.all("SELECT * FROM profiles", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Add a new profile
app.post("/profiles", (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Profile name cannot be empty." });
  }

  db.run("INSERT INTO profiles (name) VALUES (?)", [name], function (err) {
    if (err) {
      res.status(400).json({ error: "Profile name must be unique." });
      return;
    }
    res.json({ id: this.lastID, name });
  });
});

// Delete a profile
app.delete("/profiles/:name", (req, res) => {
  const { name } = req.params;
  db.run("DELETE FROM profiles WHERE name = ?", name, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Profile deleted." });
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
