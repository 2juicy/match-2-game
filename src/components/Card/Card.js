import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({
  handleClick,
  id,
  name,
  flipped,
  height,
  width
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <img
          className={flipped ? "front" : "back"}
          style={(height, width)}
          src={flipped ? `img/${name}.png` : `img/back.jpg`}
          alt="Card"
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};
