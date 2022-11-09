import axios from "axios";
import { useState, useEffect } from "react";
import { CitiesIndex } from "./CitiesIndex";
import { CitiesModalShow } from "./CitiesModalShow";
import { Modal } from "./Modal";
import { MontanaCitiesMap } from "./MontanaCitiesMap";

export function Home() {
  const [cities, setCities] = useState([]);
  const [isCitiesModalShowVisible, setIsCitiesModalShowVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  const handleIndexCities = () => {
    console.log("handleIndexCities");
    axios.get("http://localhost:3000/cities.json").then((response) => {
      console.log(response.data);
      setCities(response.data);
    });
  };

  const handleModalShowCity = (city) => {
    console.log("handleModalShowCity", city);
    setIsCitiesModalShowVisible(true);
    setCurrentCity(city);
  };

  const handleHideCity = () => {
    console.log("handleHideCity");
    setIsCitiesModalShowVisible(false);
  };

  useEffect(handleIndexCities, []);

  return (
    <div>
      <CitiesIndex cities={cities} onSelectCity={handleModalShowCity} />
      <Modal show={isCitiesModalShowVisible} onClose={handleHideCity}>
        <CitiesModalShow city={currentCity} />
      </Modal>
      <MontanaCitiesMap />
    </div>
  );
}
