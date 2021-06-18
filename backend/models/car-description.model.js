//require important packages
const mongoose = require("mongoose");

//creating schema
const carSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  Condition: {
    type: String,
    required: true,
  },
  Transmission: {
    type: String,
    require: true,
  },
  enginesize: {
    type: Number,
    require: true,
  },
  enginetype: {
    type: String,
    require: true,
  },
});

//export module
module.exports = mongoose.model("Car", carSchema);
