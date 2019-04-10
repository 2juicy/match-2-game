import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import initializeDeck from "./Deck";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    setCards(initializeDeck());
  }, []);

  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <div>
      <h1>Danganronpa Memory Game</h1>
      <h2>Find the matching pairs</h2>

      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  );
}
