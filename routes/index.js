//// Load dependencies
const express = require("express");
const router = express.Router();
const config = require("../config");

//Objects are used to pass data to the rendered template
router.use((req, res, next) => {
  res.locals = config;
  next();
});

router.get("/", (req, res) => {
  res.render("pages/index", { pageTitle: "Jared's Furnitures" });
});

module.exports = router;
