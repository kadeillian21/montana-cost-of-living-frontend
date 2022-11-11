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
      <div className="row m-2">
        {cities.map((city) => (
          <div className="col-sm-6">
            <div key={city.id} className="card cities-index p-1" id="lowland-card">
              <h2>{city.name}</h2>
              <p>{city.description}</p>
              <img src={city.images[0].url} />
              <p>Population: {city.population}</p>
              <a className="btn btn-primary" href={`/cities/${city.id}`}>
                More Info About {city.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
