import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map({ postions }) {
  return (
    <div className="map-box">
      <MapContainer
        center={postions}
        zoom={8}
        scrollWheelZoom={false}
        style={{
          height: "62vh",
          width: "100wh",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={postions}>
          <Popup>you are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
