const Favorite = require("../models/Favorite.model");

module.exports.favoritesController = {
  getFavorites: async (req, res) => {
    const favoriteProduct = await Favorite.findOne({ user: req.params.userId }).populate('favoriteProducts')
    res.json(favoriteProduct)
  },
  postFavorite: async (req, res) => {
    try {
      const search = await Favorite.findOne({user: req.user.id})
      if (search) {
        return null
      }
      const data = await Favorite.create({
        user: req.user.id,
      });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addFavorite: async (req, res) => {
    try {
      const favoritesArray = await Favorite.findOne({user: req.user.id})
      if (!favoritesArray.favoriteProducts.includes(req.body.id)) {
        await Favorite.findOneAndUpdate(
          {user: req.user.id},
          {
            $push: { favoriteProducts: req.body.id},
          }
        )
      } else {
        await Favorite.findOneAndUpdate(
          {user: req.user.id},
          {
            $pull: { favoriteProducts: req.body.id},
          }
        )
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};