const Category = require("../models/Category.model");

module.exports.categoryController = {
  getCategories: async (req, res) => {
    const data = await Category.find();
    res.json(data);
  },

  createCategory: async (req, res) => {
    const data = await Category.create({
      name: req.body.name,
      image: req.body.image,
    });
    res.json("created");
  },
};
