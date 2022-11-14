import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal.jsx";
import { CitiesModalEdit } from "./CitiesModalEdit";
import { Card } from "react-bootstrap";

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
    <div className="container show-body p-2 mt-5">
      <div className="container text-bg-success mt-2 p-2">
        <h2 className="text-center p-3">{city.name}</h2>
        <p>{city.description}</p>
      </div>
      <Card className="p-1">
        <Card.Title>Economy</Card.Title>
        <Card.Text>
          <p>Median Income: ${city.median_income}</p>
        </Card.Text>
      </Card>
      <Card className="p-1">
        <Card.Title>Demographics</Card.Title>
        <Card.Text>
          <p>Population: {city.population}</p>
          <p>Population Growth per Year: {city.population_percent_change}%</p>
        </Card.Text>
      </Card>
      <Card className="p-1">
        <Card.Title>Housing</Card.Title>
        <Card.Text>
          <p>Median Rent with Utilities: ${city.median_gross_rent}</p>
          <p>Median Monthly Mortgage: ${city.median_monthly_mortgage}</p>{" "}
        </Card.Text>
      </Card>
      <Card className="p-1">
        <Card.Title>Food and Gas</Card.Title>
        <Card.Text>
          <p>Price of Gas: ${city.gas_price}</p>
        </Card.Text>
      </Card>
      <div className="row justify-content-center">
        {city.images?.map((image) => (
          <div className="col-sm-3 mx-3 my-1 image-grid" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
      <Modal show={isCityEditModalVisible} onClose={() => setIsCityEditModalVisible(false)}>
        <CitiesModalEdit city={city} onUpdateCity={handleUpdateCity} />
      </Modal>
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <button className="btn btn-primary" onClick={() => onSelectCity(city)}>
          Edit {city.name}
        </button>
      )}
    </div>
  );
}
