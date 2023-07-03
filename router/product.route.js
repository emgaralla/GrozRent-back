const { Router } = require("express");
const { productController } = require("../controllers/product.controller");
const fileMiddleware = require("../middlewares/file.middleware");
const authmidlleware = require("../middlewares/auth.middleware");

const router = Router();
router.post(
  "/products",
  authmidlleware,
  fileMiddleware.array("img", 4),
  productController.addProduct
);
router.get("/products", productController.findProducts);
router.get("/user-products",authmidlleware, productController.getUserProduct);
module.exports = router;
