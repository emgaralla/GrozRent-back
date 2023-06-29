const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const authmidlleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/auth", userController.registerUser); // Роут регистрации пользователя
router.post("/login", userController.login); // Вход в учетную запись
router.get("/users", userController.allUsers); // Вывод всех пользователей

module.exports = router;
