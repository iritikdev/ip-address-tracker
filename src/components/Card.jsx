import React from "react";

function Card({ ip, region, country, timezone, isp }) {
  return (
    <div className="card">
      <div className="ip-address">
        <div className="title">ip address</div>
        <div className="subtitle">{ip}</div>
      </div>
      <div className="location">
        <div className="title">location</div>
        <div className="subtitle">
          {region}, {country}
        </div>
      </div>
      <div className="timezone">
        <div className="title">timezone</div>
        <div className="subtitle">UTC{timezone}</div>
      </div>
      <div className="isp">
        <div className="title">ISP</div>
        <div className="subtitle">{isp}</div>
      </div>
    </div>
  );
}

export default Card;
