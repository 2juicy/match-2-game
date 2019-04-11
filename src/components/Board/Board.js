import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import "./Board.css";

export default function Board({
  dimension,
  cards,
  flipped,
  handleClick,
  disabled
}) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          width={dimension / 4.5}
          height={dimension / 4.5}
          flipped={flipped.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.numbers).isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
