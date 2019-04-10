import React from "react";
import PropTypes from 'prop-types';
import Card from '../Card'

function Board({ cards, flipped, handleClick}){
    return <div className="board">
    { cards.map(card => 
    <Card
        id={card.id}
        type={card.type}
        width={card.width}
        height={card.height}
        flipped={flipped.includes(card.id)}
        handleClick={() => handleClick(card.id)}
      />)}

    </div>
}

Card.propTypes = {
    cards.
}

export default Board;