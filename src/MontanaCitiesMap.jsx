import ReactMapGL from "react-map-gl";
import { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = import.meta.env.VITE_MONTANA_COST_OF_LIVING_TOKEN;

export function MontanaCitiesMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-110.1);
  const [lat, setLat] = useState(46.76675102746894);
  const [zoom, setZoom] = useState(6.5);

  // const layerList = document.getElementById("menu");
  // const inputs = layerList.getElementsByTagName("input");

  // for (const input of inputs) {
  //   input.onclick = (layer) => {
  //     const layerId = layer.target.id;
  //     map.setStyle("mapbox://styles/mapbox/" + layerId);
  //   };
  // }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kadeillian/cla9yhitx000214r35vvxrlu5",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
      <div id="menu">
        <input id="mapbox://styles/kadeillian/cla9yhitx000214r35vvxrlu5" type="radio" name="rtoggle" value="outdoors" />
        <label for="custom-streets">Streets</label>
        <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" checked="checked" />
        <label for="satellite-v9">Satellite</label>
      </div>
    </div>
  );
}
