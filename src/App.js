import React, { Component } from "react";
import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Memory Game</h1>
        <h2>Can you remember where the cards are?</h2>
        <Card
          id={1}
          width={100}
          height={100}
          back={`/img/back.png`}
          front={`/img/react.png`}
          flipped={flipped.includes(1)}
          handleClick={() => handleClick(1)}
        />
      </div>
    );
  }
}

export default App;
