const Car = require("./../models/car-description.model");

//get all car records
exports.getAllCars = async (req, res) => {
  try {
    const car = await Car.find();
    res.status(200).json(car);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

//get single car record
exports.getSingleCar = async (req, res) => {
  try {
    const carid = req.params.id;
    const car = await Car.findById(carid);
    res.status(200).json(car);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
//post a car record
exports.postCar = async (req, res) => {
  const car = req.body;
  try {
    await Car.create(car);
    res.status(200).json(car);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

//update car record by id
exports.updateCarById = async (req, res) => {
  const carid = req.params.id;
  const car = req.body;
  try {
    await Car.findByIdAndUpdate(carid, car, { useFindAndModify: false });
    res.status(200).json("Record updated successfully");
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

//delet a car by id
exports.deletCarById = async (req, res) => {
  const carid = req.params.id;
  try {
    await Car.findByIdAndDelete(carid);
    res.status(200).json("Record deleted successfully.");
  } catch {
    res.status(404).json({ message: err });
  }
};
