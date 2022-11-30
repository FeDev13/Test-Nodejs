const mongoose = require("mongoose");

const usuarios = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("usuario", usuarios);
