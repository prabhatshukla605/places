import React from "react";

const Location = (props) => {

  return (
    <div className="location_wrapper">
      {props.data.places.map((curr) => (
        <div key={Math.random()} className="card">
          <div className="details">
            <h2 className="country">
              Country: <span>{props.data.country}</span>
            </h2>
            <h3 className="state">
              state: <span>{curr.state}</span>
            </h3>
            <h3 className="place">
              place: <span>{curr['place name']}</span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Location;
