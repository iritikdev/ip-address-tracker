import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function MarkerPosition({ positions }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(positions, 12, {
      animate: true,
    });
  }, [map, positions]);
  return (
    <Marker position={positions}>
      <Popup>you are here</Popup>
    </Marker>
  );
}

export default MarkerPosition;
