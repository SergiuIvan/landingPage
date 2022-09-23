import "./CardCustomer.scss";
import React from "react";
function CardCustomer({image, name, location, description }) {
  return (
    <>
      <div className="card-customer">
        <div className="cardCustomer-info">
          <div className="cardCustomer-photo">
            <img src={require(`../../images/${image}`)}></img>
          </div>
          <div className="cardCustomer-name-location">
            <div className="name">{name}</div>
            <div className="location">{location}</div>
          </div>
          <div className="star">
            <div className="number">
              <p>4.5</p>
            </div>
            <div className="star-photo">
              <img src={require("../../images/star.png")}></img>
            </div>
          </div>
        </div>

        <div className="cardCustomer-description">{description}</div>
      </div>
    </>
  );
}

export default CardCustomer;
