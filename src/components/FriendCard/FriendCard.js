//Sets up the reusable FriendCard component
import React from "react";
import "./FriendCard.css";

//Pass the image into each card so all 12 are rendered
let FriendCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img className="img" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;