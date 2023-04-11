import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { iconArrow } from "./assets";
import Card from "./components/Card";
import MarkerPosition from "./components/MarkerPosition";

const API_KEY = "at_HWfE0kI8ESquJVQZfTu3AOfVrVh3m";

function App() {
  const [postions, setPositions] = useState([20.5937, 78.9629]);
  const [ipAddress, setIpAddress] = useState("");
  const [ipInfo, setIpInfo] = useState(null);

  const fetchIpInfomation = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
      );
      const data = await response.json();
      setIpInfo(data);
      setPositions([data?.location?.lat, data?.location?.lng]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIpInfomation();
  }, []);

  return (
    <>
      <div className="container">
        <div className="search-box">
          <h1 className="title">IP Address Tracker</h1>
          <div className="input-group">
            <input
              type="text"
              name="ip-address"
              value={ipAddress}
              placeholder="192.168.32.15"
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchIpInfomation}>
              <img src={iconArrow} alt="search" />
            </button>
          </div>
          <Card
            ip={ipInfo?.ip}
            timezone={ipInfo?.location?.timezone}
            region={ipInfo?.location?.region}
            country={ipInfo?.location?.country}
            isp={ipInfo?.isp}
          />
        </div>
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
            <MarkerPosition positions={postions} />
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default App;
