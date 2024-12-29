import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WordList from './components/WordList';

const App = () => {
  const [words, setWords] = useState([
    { word: 'apple', translation: 'яблоко' },
    { word: 'banana', translation: 'банан' },
    { word: 'cherry', translation: 'вишня' }
  ]);

  return (
    <div className="app">
      <Header />
      <WordList words={words} />
      <Footer />
    </div>
  );
};

export default App;
