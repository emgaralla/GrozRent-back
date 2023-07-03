const Otziv = require("../models/Otziv.model");

module.exports.otzivController = {
  getOtzivs: async (req, res) => {
    const data = await Otziv.find().populate('user', "-__v");
    res.json(data);
  },

  createOtziv: async (req, res) => {
    try {
      const otziv = await Otziv.create({
          user: req.user.id,
          text: req.body.text,
      });
      return res.json(otziv);
    } catch (e) {
      return res.status(401).json({ error: "it isnt right token" });
    }
  },

  deleteOtziv: async (req, res) => {
    const { id } = req.params;
    try {
      const otziv = await Otziv.findById(id);

      if (otziv.user.toString() === req.user.id) {
        await Otziv.findByIdAndRemove(id);
        return res.json("deleted");
      }
      return res.status(401).json("dont have accept");
    } catch (e) {
      return res.status(401).json("error");
    }
  },
};
