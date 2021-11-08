// Schema structure
const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  linkURL: String,
  credit: String,
  creditURL: String,
});

module.exports = mongoose.model("Furniture", furnitureSchema);
