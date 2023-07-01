const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  text: String,
  adress: String,
  phone: Number,
  price: Number,
  image: [],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
