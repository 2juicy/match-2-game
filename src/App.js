import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <div>
      <h1>Danganronpa Memory Game</h1>
      <h2>Find the matching cards</h2>

      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  );
}

export default App;
