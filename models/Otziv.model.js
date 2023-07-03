const mongoose = require("mongoose");

const otzivSchema = mongoose.Schema({
  text: String,
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Otziv = mongoose.model("Otziv", otzivSchema);
module.exports = Otziv;