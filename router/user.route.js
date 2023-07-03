const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const authmidlleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/auth", userController.registerUser); // Роут регистрации пользователя
router.post("/login", userController.login); // Вход в учетную запись
router.get("/users", userController.allUsers); // Вывод всех пользователей
router.get("/user", authmidlleware, userController.getUser); // Вывод конкретного пользователя
router.patch("/user", authmidlleware, userController.changeUser); // Редактирование пользователя

module.exports = router;
