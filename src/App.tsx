import React, { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const newCards = generateCards();
    setCards(newCards);
  }, []);

  const generateCards = () => {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const pairs = values.concat(values);
    const shuffledPairs = shuffleArray(pairs);

    return shuffledPairs.map((value, index) => ({
      id: index,
      value,
      isVisible: false,
    }));
  };

  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (card) => {
    if (!card.isVisible && selectedCards.length < 2) {
      const updatedCards = cards.map((c) => {
        if (c.id === card.id) {
          return { ...c, isVisible: true };
        }
        return c;
      });

      setCards(updatedCards);
      setSelectedCards([...selectedCards, card]);

      if (selectedCards.length === 1) {
        setTimeout(() => {
          checkForMatch();
        }, 1000);
      }
    }
  };

  const checkForMatch = () => {
    const [card1, card2] = selectedCards;
    let updatedCards = cards;

    if (card1.value === card2.value) {
      updatedCards = updatedCards.map((c) => {
        if (c.id === card1.id || c.id === card2.id) {
          return { ...c, isVisible: false };
        }
        return c;
      });

      setMatchedPairs(matchedPairs + 1);
    } else {
      updatedCards = updatedCards.map((c) => {
        if (c.id === card1.id || c.id === card2.id) {
          return { ...c, isVisible: false };
        }
        return c;
      });
    }

    setSelectedCards([]);
    setCards(updatedCards);
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <h3>Tablero</h3>
      <Board cards={cards} onCardClick={handleCardClick} />
      <h3>Puntuación</h3>
      <ScoreBoard matchedPairs={matchedPairs} />
    </div>
  );
};

export default App;
