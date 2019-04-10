import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [flipped, setFlipped] = useState([]);
  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <div>
      <h1>Danganronpa Memory Game</h1>
      <h2>Find the matching cards</h2>
      <Card
        id={1}
        width={100}
        height={100}
        front={`/img/Aoi.png`}
        back={`/img/back.jpg`}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}

export default App;
