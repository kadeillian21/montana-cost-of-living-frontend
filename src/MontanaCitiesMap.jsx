import { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import axios from "axios";
mapboxgl.accessToken = import.meta.env.VITE_MONTANA_COST_OF_LIVING_TOKEN;

export function MontanaCitiesMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-110.1);
  const [lat, setLat] = useState(46.76675102746894);
  const [zoom, setZoom] = useState(6.5);

  const [cities, setCities] = useState([]);

  const handleIndexCities = () => {
    console.log("handleIndexCities");
    axios.get("http://localhost:3000/cities.json").then((response) => {
      // console.log(response.data);
      setCities(response.data);
    });
  };

  useEffect(handleIndexCities, []);

  useEffect(() => {
    if (map.current) {
      cities.forEach((city) => {
        const popup = new mapboxgl.Popup({ offset: 25, className: "marker-popup" }).setHTML(`<h2>${city.name}</h1>
        <img src=${city.images[0].url}>
        <p>${city.description}</p>
        <p>Population: ${city.population}</p>
        <p>Median Income: $${city.median_income}</p>
        <a href="/cities/${city.id}">Learn More</a>`);
        new mapboxgl.Marker({ color: "red" })
          .setLngLat([city.longitude, city.latitude])
          .addTo(map.current)
          .setPopup(popup);
      });

      return;
    } // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kadeillian/cla9yhitx000214r35vvxrlu5",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [cities]);

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}
