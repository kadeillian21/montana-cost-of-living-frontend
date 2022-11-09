import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function CitiesIndex() {
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
      <h1>Cities</h1>
      {cities.map((city) => (
        <div key={city.id}>
          <h2>{city.name}</h2>
          <p>{city.description}</p>
          <img src={city.images[0].url} />
          <p>Population: {city.population}</p>
          <Link to={`/cities/${city.id}`}>More Info</Link>
        </div>
      ))}
    </div>
  );
}
