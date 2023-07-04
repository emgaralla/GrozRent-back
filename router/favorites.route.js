const { Router } = require('express')
const { favoritesController } = require('../controllers/favorites.controller')
const authmidlleware = require("../middlewares/auth.middleware");

const router = Router()

router.post('/favorites', authmidlleware, favoritesController.postFavorite)
router.patch('/favorites', authmidlleware, favoritesController.addFavorite)


module.exports = router