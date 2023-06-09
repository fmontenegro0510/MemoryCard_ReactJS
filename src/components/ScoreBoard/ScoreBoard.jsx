import React from 'react';

const ScoreBoard = ({ matchedPairs }) => (
  <div>
    <h2>Score</h2>
    <p>Matched pairs: {matchedPairs}</p>
  </div>
);

export default ScoreBoard;
