import ReactMapGL from "react-map-gl";
import { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = import.meta.env.VITE_MONTANA_COST_OF_LIVING_TOKEN;

export function MontanaCitiesMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map-container"></div>;
}
