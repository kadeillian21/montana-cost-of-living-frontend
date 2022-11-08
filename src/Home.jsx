import axios from "axios";
import { useState, useEffect } from "react";
import { CitiesIndex } from "./CitiesIndex";

export function Home() {
  const [cities, setCities] = useState([]);

  const handleIndexCities = () => {
    console.log("handleIndexCities");
    axios.get("http://localhost:3000/cities.json").then((response) => {
      console.log(response.data);
      setCities(response.data);
    });
  };

  useEffect(handleIndexCities, []);

  return (
    <div>
      <CitiesIndex cities={cities} />
    </div>
  );
}
