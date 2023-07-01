const Product = require("../models/Product.model");

module.exports.productController = {
  addProduct: async (req, res) => {
    console.log(req.files[0].path);
    try {
      const product = await Product.create({
        title: req.body.title,
        text: req.body.text,
        adress: req.body.adress,
        phone: req.body.phone,
        price: req.body.price,
        image: req.files
      });
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  findProducts: async (req,res) => {
    const data = await Product.find()
    res.json(data)
  }
};
