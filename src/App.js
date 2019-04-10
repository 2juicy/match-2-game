import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [flipped, setFlipped] = useState([]);
  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <div>
      <h1>Danganronpa Memory Game</h1>
      <h2>Find the matching cards</h2>
    </div>
  );
}

export default App;
