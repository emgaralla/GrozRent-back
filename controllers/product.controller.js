const Product = require("../models/Product.model");

module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      const product = await Product.create({
        title: req.body.title,
        text: req.body.text,
        adress: req.body.adress,
        phone: req.body.phone,
        price: req.body.price,
        categorie: req.body.categorie,
        image: req.files,
        user: req.user.id
      });
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  findProducts: async (req, res) => {
    const data = await Product.find();
    res.json(data);
  },
};
