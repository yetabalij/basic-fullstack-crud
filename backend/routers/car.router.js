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
router.get("/getSingleCar", getSingleCar);
router.post("/postcar", postCar);
router.put("/updatecarbyid", updateCarById);
router.delete("/deletecarbyid", deletCarById);

//export router modules
module.exports = router;
