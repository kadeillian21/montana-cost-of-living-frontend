import { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import axios from "axios";
mapboxgl.accessToken = import.meta.env.VITE_MONTANA_COST_OF_LIVING_TOKEN;

export function MontanaCitiesMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // lng, lat, and zoom are all essential variables for the map to load.
  const [lng, setLng] = useState(-110.1);
  const [lat, setLat] = useState(47);
  const [zoom, setZoom] = useState(6.25);
  const [cities, setCities] = useState([]);

  // Returns the data from my backend and sets it to a useState variable so I can access it throughout the page.
  const handleIndexCities = () => {
    console.log("handleIndexCities");
    axios.get("http://localhost:3000/cities.json").then((response) => {
      setCities(response.data);
    });
  };

  useEffect(handleIndexCities, []);

  useEffect(() => {
    // The if condition makes the markers and associated popups if there is a current map.
    if (map.current) {
      cities.forEach((city) => {
        const popup = new mapboxgl.Popup({ offset: 25, className: "marker-popup" }).setHTML(`<h2>${city.name}</h1>
        <img src=${city.images[0].url}>
        <p>${city.description}</p>
        <strong>Population: ${city.population}</strong>
        <br />
        <strong>Median Income: $${city.median_income}</strong>
        <br />
        <a class="btn btn-success" href="/cities/${city.id}">Learn More about ${city.name}</a>`);
        new mapboxgl.Marker({ color: "red" })
          .setLngLat([city.longitude, city.latitude])
          .addTo(map.current)
          .setPopup(popup);
      });

      return;
    } // Renders a new map if there is no map being rendered.  This is where the map should be rendered each time.
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
