import React from 'react';

const WordCard = ({ word, translation }) => {
  return (
    <div className="word-card">
      <h3>{word}</h3>
      <p>{translation}</p>
    </div>
  );
};

export default WordCard;
