import { useState } from "react";
import { iconArrow } from "./assets";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const [mapInitialValues, setMapInitialValues] = useState({
    position: [51.505, -0.091],
    zoom: 13,
  });
  return (
    <>
      <div className="container">
        <div className="search-box">
          <h1 className="title">IP Address Tracker</h1>
          <div className="input-group">
            <input type="text" name="ip-address" placeholder="192.168.32.15" />
            <button className="btn btn-primary">
              <img src={iconArrow} alt="search" />
            </button>
          </div>
          <div className="card">
            <div className="ip-address">
              <div className="title">ip address</div>
              <div className="subtitle">192.168.32.12</div>
            </div>
            <div className="location">
              <div className="title">location</div>
              <div className="subtitle">Brooklyn, NY 10001</div>
            </div>
            <div className="timezone">
              <div className="title">timezone</div>
              <div className="subtitle">UTC-5:00</div>
            </div>
            <div className="isp">
              <div className="title">ISP</div>
              <div className="subtitle">SpaceX Starlink</div>
            </div>
          </div>
        </div>
        <div className="map-box">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{
              height: "100vh",
              width: "100wh",
              zIndex: "-10",
              isolation: "isolate",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default App;
