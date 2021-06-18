//importing required moduels
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const carRoute = require("./routers/car.router");

//creating express app
const app = express();

//db connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db is connected.");
  });

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//creating routing middleware
app.use("/api", carRoute);

//creating a port for the app
const port = process.env.PORT || 5000;

//let app listen to the specified port.
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
