import { useState } from 'react';
import './App.css';

function App() {
  // Состояние для отображения перевода
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);

  // Слово и его перевод
  const word = "Hello";
  const translation = "Привет";

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <div 
        className="card" 
        style={{
          display: 'inline-block',
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '300px',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>{word}</p>
        {/* Кнопка для показа/скрытия перевода */}
        <button 
          onClick={() => setIsTranslationVisible(!isTranslationVisible)}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          {isTranslationVisible ? "Скрыть перевод" : "Показать перевод"}
        </button>
        {/* Условный рендеринг перевода */}
        {isTranslationVisible && (
          <p style={{ marginTop: '15px', fontSize: '18px', color: '#333' }}>{translation}</p>
        )}
      </div>
    </div>
  );
}

export default App;
