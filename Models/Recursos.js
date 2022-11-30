const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UsersSchema = new Schema({
  text: {
    type: String,
  },
  idRecurso: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("recurso", UsersSchema);
