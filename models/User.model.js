const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
