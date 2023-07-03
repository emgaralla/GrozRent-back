const { Router } = require("express");
const { otzivController } = require("../controllers/otziv.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/otzivs", otzivController.getOtzivs);
router.post("/otzivs", authMiddleware, otzivController.createOtziv);
router.delete("/otzivs/:id", authMiddleware, otzivController.deleteOtziv);

module.exports = router;
