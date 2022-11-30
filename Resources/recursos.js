const Recurso = require("../Models/Recursos");

const getRecurso = async (req, res) => {
  const recurso = await Recurso.find();
  res.json(recurso);
};
const createRecurso = async (req, res) => {
  const recurso = new Recurso(req.body);
  recurso.save();
  res.json(recurso);
};
module.exports = {
  getRecurso,
  createRecurso,
};
