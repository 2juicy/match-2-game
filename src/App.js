import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import initializeDeck from "./Deck";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    preloadImages();
  }, [cards]);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = id => {
    if (flipped.includes(id)) return;
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1500);
      }
    }
  };

  const preloadImages = () => {
    cards.forEach(card => {
      const src = `img/${card.name}.png`;
      new Image().src = src;
    });
  };

  const resetCards = () => {
    if (solved.length === 14) {
      setTimeout(function() {
        setSolved([]);
        setTimeout(function() {
          setCards(initializeDeck());
        }, 600);
      }, 1500);
    }
    setFlipped([]);
    setDisabled(false);
  };

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.name === clickedCard.name;
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };
  return (
    <div>
      <h1>Danganronpa Memory Game</h1>
      <h2>Find the matching pairs</h2>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />

      <a
        href="https://github.com/2juicy/match-2-game"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>
  );
}
