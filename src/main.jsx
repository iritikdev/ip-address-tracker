import React from "react";
import ReactDOM from "react-dom/client";

import "leaflet/dist/leaflet";
import App from "./App";

import "leaflet/dist/leaflet.css";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
