import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

function Board({ cards, flipped, handleClick }) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={card.width}
          height={card.height}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.numbers).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Board;
