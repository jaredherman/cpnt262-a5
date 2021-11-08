const express = require("express");
const furnitures = require("../seeds/furnitures");

const router = express.Router();

//display all products

router.get("/", (request, response) => {
  response.render("pages/index", { pageTitle: "Jared's Furnitures" });
});

//Tony's code : display single product

router.get("/:title", (request, response) => {
  const furniture = furnitures.find(function (item) {
    return request.params.title.toLowerCase() === item.title.toLowerCase();
  });

  if (!furniture) {
    response.render("pages/404", { pageTitle: "Jared's Furnitures" });
  }

  response.render("pages/singleitem", {
    pageTitle: "Jared's Furnitures",
    furniture: furniture,
  });
});

module.exports = router;
