const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/Users");
const resourceRouter = require("./Routes/Resources");

require("dotenv/config");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRoute);
app.use("recursos", resourceRouter);

//conecta a mongo
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("conectado");
});

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
