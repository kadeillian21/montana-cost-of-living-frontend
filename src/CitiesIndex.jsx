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
    <div className="mt-5 p-2">
      <div className="row m-2">
        {cities.map((city) => (
          <div className="col-sm-6 mt-3">
            <div key={city.id} className="card cities-index p-1" id="lowland-card">
              <div className="row mx-auto">
                <div className="col-sm-6">
                  <h2>{city.name}</h2>
                  <p>{city.description}</p>
                  <p>Population: {city.population}</p>
                  <a className="btn btn-primary" href={`/cities/${city.id}`}>
                    More Info About {city.name}
                  </a>
                </div>
                <div className="col-sm-6 image-fluid text-center my-auto image-size">
                  <img src={city.images[0].url} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
