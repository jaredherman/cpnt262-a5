// Load dependencies
const mongoose = require("./_connection.js");
const path = require("path");
const dotenv = require("dotenv").config();
const express = require("express");
const index = require("./routes/index");
const furnitures = require("./routes/furnitures");
const api = require("./routes/api/v0");
const pages = require("./routes/index");
const db = mongoose.connection;

// Create express app
const app = express();

app.use("/api/v0", api);

// Create view engine
app.set("view engine", "ejs");

// Set all files in the public folder as static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pages);
app.use("/furnitures", furnitures);

app.use(function (req, res) {
  res.status(404);
  res.render("pages/404", { pageTitle: "Jared's Furnitures" });
});

// Connect to DB
db.on("error", function (error) {
  res.render("pages/500", { pageTitle: "Jared's Furnitures" });
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
