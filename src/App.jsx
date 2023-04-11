import { useEffect, useState } from "react";
import { iconArrow } from "./assets";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Card from "./components/Card";

const API_KEY = "at_OhmKAlyr8cFia29bD95EmxvEA9qQF";

function App() {
  const [mapInitialValues, setMapInitialValues] = useState({
    position: [51.505, -0.091],
    zoom: 13,
  });
  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [ipInfo, setIpInfo] = useState(null);
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ipAddress}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIpInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);
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
          <Card
            ip={ipInfo?.ip}
            timezone={ipInfo?.location.timezone}
            region={ipInfo?.location.region}
            country={ipInfo?.location.country}
            isp={ipInfo?.isp}
          />
        </div>
        <div className="map-box">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
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
