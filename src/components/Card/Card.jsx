import React from 'react';

const Card = ({ card, onCardClick }) => (
  <div
    className={`card ${card.isVisible ? 'visible' : ''}`}
    onClick={() => onCardClick(card)}
  >
    {card.isVisible ? card.value : ''}
  </div>
);

export default Card;
