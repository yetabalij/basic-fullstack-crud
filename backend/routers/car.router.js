//importing required modules
const express = require("express");
const {
  getAllCars,
  getSingleCar,
  postCar,
  updateCarById,
  deletCarById,
} = require("./../controller/car.controler");

//create a router object and api
const router = express.Router();

router.get("/getAllCars", getAllCars);
router.get("/getSingleCar/:id", getSingleCar);
router.post("/postcar", postCar);
router.put("/updatecarbyid/:id", updateCarById);
router.delete("/deletecarbyid/:id", deletCarById);

//export router modules
module.exports = router;
