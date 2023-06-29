const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  // Регистрация пользователя
  registerUser: async (req, res) => {
    const { name, lastName, email, password, phone } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res
        .status(401)
        .json({ error: "Пользователь с таким Email уже существует" });
    }

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    const user = await User.create({
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      password: hash,
    });

    res.json(user);
  },
  // Вход в учетную запись
  login: async (req, res) => {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email: email });
    if (!candidate) {
      return res.status(401).json({ error: "Неверный Email или пароль" });
    }
    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json({ error: "Неверный Email или пароль" });
    }
    const payload = {
      id: candidate._id,
      email: candidate.email,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });

    res.json(token);
  },
  allUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },
};
