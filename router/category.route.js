const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");


const router = Router();

router.get("/category", categoryController.getCategories)
router.post("/category", categoryController.createCategory)

module.exports = router;
