import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({
  handleClick,
  disabled,
  solved,
  id,
  name,
  flipped,
  height,
  width
}) {
  return (
    <div
      className={`flip-container ${flipped || solved ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          className={flipped ? "front" : "back"}
          style={{ width, height }}
          src={flipped || solved ? `img/${name}.png` : `img/back.jpg`}
          alt="Card"
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
