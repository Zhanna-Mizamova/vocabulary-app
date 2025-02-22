import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { WordsProvider, WordsList } from './WordsContext';

function App() {
  return (
    <WordsProvider>
      <WordsList />
    </WordsProvider>
  );
}

export default App;

