const { request } = require("express");
const express = require("express");
const router = express.Router();

const User = require("../Models/Usuario");

/* metodo post de usuario comun */
router.post("/reguser", (req, resp) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
  });
  user
    .save()
    .then((data) => {
      resp.json(data);
    })
    .catch((error) => {
      response.json({ message: error });
    });
});

/*metodo get de todos los usuarios*/
router.get("/allusers", async (req, resp) => {
  try {
    const getUsers = await User.find();
    resp.json(getUsers);
  } catch (error) {
    resp.send({ message: "error" });
  }
});

module.exports = router;
