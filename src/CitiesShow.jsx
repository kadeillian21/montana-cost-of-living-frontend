import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function CitiesShow() {
  const params = useParams();
  const [city, setCity] = useState([]);

  const handleShowCity = () => {
    console.log("handleShowCity");
    console.log(params);
    axios.get(`http://localhost:3000/cities/${params.cityId}.json`).then((response) => {
      console.log(response.data);
      setCity(response.data);
    });
  };

  useEffect(handleShowCity, []);

  return (
    <div>
      <h2>{city.name}</h2>
      <p>{city.description}</p>
      <p>Median Income: ${city.median_income}</p>
      <p>Median Rent with Utilities: ${city.median_gross_rent}</p>
      <p>Population: {city.population}</p>
      <p>Population Growth per Year: {city.population_percent_change}%</p>
      <p>Median Monthly Mortgage: ${city.median_monthly_mortgage}</p>
      <p>Price of Gas: ${city.gas_price}</p>
      <p>Monthly Average Food Cost: ${city.monthly_average_food_cost}</p>
      <table>
        <tbody className="formatted-image-table">
          <tr>
            {city.images?.map((image) => (
              <td key={image.id}>
                <img src={image.url} className="img-fluid" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
