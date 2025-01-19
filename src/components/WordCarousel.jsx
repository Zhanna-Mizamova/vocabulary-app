import React, { useState } from 'react';
import './WordCarousel.css'; 

const WordCarousel = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="word-carousel">
      <button onClick={handlePrev} className="arrow-button">&#8592;</button>
      <div className="word-card">
        <p className="word">{words[currentIndex].word}</p>
        <p className="translation">{words[currentIndex].translation}</p>
      </div>
      <button onClick={handleNext} className="arrow-button">&#8594;</button>
    </div>
  );
};

export default WordCarousel;
