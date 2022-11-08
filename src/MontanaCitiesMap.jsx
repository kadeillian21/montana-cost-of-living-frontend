import ReactMapGL from "react-map-gl";
import { useState } from "react";

export function MontanaCitiesMap() {
  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -114.0,
    zoom: 10,
    width: "1000px",
    height: "1000px",
  });

  return (
    <div>
      <ReactMapGL {...viewport} mapboxAccessToken={process.env.REACT_APP_MONTANA_COST_OF_LIVING_TOKEN}>
        markers here
      </ReactMapGL>
    </div>
  );
}
