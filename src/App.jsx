import { useState } from 'react';
import './App.css';
import WordCarousel from './components/WordCarousel';

function App() {
  const words = [
    { word: 'Hello', translation: 'Привет' },
    { word: 'World', translation: 'Мир' },
    { word: 'React', translation: 'Реакт' },
    { word: 'Carousel', translation: 'Карусель' }
  ];

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Vocabulary</h1>
      <WordCarousel words={words} />
    </div>
  );
}

export default App;
