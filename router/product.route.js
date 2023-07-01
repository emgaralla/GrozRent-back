const { Router } = require("express");
const { productController } = require("../controllers/product.controller");
const fileMiddleware = require("../middlewares/file.middleware");


const router = Router();
router.post('/products', fileMiddleware.array('img', 4), productController.addProduct)
module.exports = router;
