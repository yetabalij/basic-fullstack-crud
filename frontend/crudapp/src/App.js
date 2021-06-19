import BasicTable from "./components/crudtable";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [Cardata, setData] = useState([]);
  const uri = "http://localhost:5000/api/getAllCars";
  useEffect(() => {
    axios.get(uri).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h3>Car Info.</h3>
      <BasicTable cardata={Cardata} />
    </div>
  );
};

export default App;
