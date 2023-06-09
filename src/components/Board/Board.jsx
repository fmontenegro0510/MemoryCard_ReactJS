import React from 'react';
import Card from '../Card/Card';

const Board = ({ cards, onCardClick }) => (
  <div className="board">
    {cards.map((card) => (
      <Card key={card.id} card={card} onCardClick={onCardClick} />
    ))}
  </div>
);

export default Board;
