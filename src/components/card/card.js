import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ handleClick, id, type, flipped }) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <img
          className={flipped ? "front" : "back"}
          src={flipped ? `img/${type}.png` : `img/back.jpg`}
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
  type: PropTypes.string.isRequired
};
