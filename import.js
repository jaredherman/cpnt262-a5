const mongoose = require("./_connection.js");

//Import seed data
const dbSeed = require("./seeds/furnitures.js");

//Define model
const Furniture = require("./models/furniture.js");

Furniture.insertMany(dbSeed, function (error, furniture) {
  console.log("Data imported");
  mongoose.connection.close();
});
