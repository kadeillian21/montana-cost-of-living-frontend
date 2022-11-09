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
          <p>Median Income: ${city.median_income}</p>
          <p>Median Rent with Utilities: ${city.median_gross_rent}</p>
          <p>Population: {city.population}</p>
          <p>Population Growth per Year: {city.population_percent_change}%</p>
          <p>Median Monthly Mortgage: ${city.median_monthly_mortgage}</p>
          <p>Price of Gas: ${city.gas_price}</p>
          <Link to={`/cities/${city.id}`}>More Info</Link>
        </div>
      ))}
    </div>
  );
}
