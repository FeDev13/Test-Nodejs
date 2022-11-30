const express = require("express");
const routerrecurso = express.Router();
const { getRecurso, createRecurso } = require("../Resources/recursos");
// const { ValidateUser } = require("../models/user.model");

routerrecurso.get("/recurso/get", getRecurso);
routerrecurso.post("/recurso/post", createRecurso);

module.exports = routerrecurso;
