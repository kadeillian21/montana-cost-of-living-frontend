import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal.jsx";
import { CitiesModalEdit } from "./CitiesModalEdit";

export function CitiesShow() {
  const params = useParams();
  const [city, setCity] = useState([]);
  const [isCityEditModalVisible, setIsCityEditModalVisible] = useState(false);

  const handleShowCity = () => {
    console.log("handleShowCity");
    console.log(params);
    axios.get(`http://localhost:3000/cities/${params.cityId}.json`).then((response) => {
      console.log(response.data);
      setCity(response.data);
    });
  };

  const onSelectCity = () => {
    setIsCityEditModalVisible(true);
  };

  const handleUpdateCity = (id, params) => {
    axios.patch("http://localhost:3000/cities/" + id + ".json", params).then((response) => {
      const updatedCity = response.data;
      setCity(updatedCity);
      setIsCityEditModalVisible(false);
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
      <Modal show={isCityEditModalVisible} onClose={() => setIsCityEditModalVisible(false)}>
        <CitiesModalEdit city={city} onUpdateCity={handleUpdateCity} />
      </Modal>
      <button onClick={() => onSelectCity(city)}>Edit {city.name}</button>
    </div>
  );
}
