import React from "react";
import ReadCar from "./../components/ReadCar";

import axios from "axios";
import { useState, useEffect } from "react";

const Home = ({ cardata }) => {
  const [Cardata, setCarData] = useState([]);
  const uri = "http://localhost:5000/api/getAllCars";
  useEffect(() => {
    axios.get(uri).then((response) => {
      setCarData(response.data);
    });
  }, []);

  return (
    <div>
      <ReadCar cardata={Cardata} />
    </div>
  );
};

export default Home;
