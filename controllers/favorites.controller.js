const Favorite = require("../models/Favorite.model");

module.exports.favoritesController = {
  postFavorite: async (req, res) => {
    try {
      const data = await Favorite.create({
        user: req.user.id,
        // favoriteProducts: req.body.favoriteProducts
      });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addFavorite: async (req, res) => {
    // console.log(res)
    try {
      const data = await Favorite.findOneAndUpdate(
        {user: req.user.id},
        {
          $push: { favoriteProducts: req.body.product },
        }
      );
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};