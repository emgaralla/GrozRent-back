const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  text: String,
  adress: String,
  phone: Number,
  price: Number,
  categorie: {
    ref: "Category",
    type: mongoose.SchemaTypes.ObjectId,
  },
  image: [],
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
