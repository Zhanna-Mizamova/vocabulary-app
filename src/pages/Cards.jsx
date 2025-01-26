import React, { useState } from 'react';

const wordList = [
    { id: 1, word: 'apple', translation: 'яблоко' },
    { id: 2, word: 'book', translation: 'книга' },
    { id: 3, word: 'car', translation: 'машина' },
];

const Cards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

    const nextCard = () => {
        setShowTranslation(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Тренажер карточек</h1>
            <div style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                width: '300px',
                margin: '0 auto',
            }}>
                <p style={{ fontSize: '1.5rem' }}>{wordList[currentIndex].word}</p>
                {showTranslation && <p style={{ color: 'gray' }}>{wordList[currentIndex].translation}</p>}
                <button onClick={() => setShowTranslation(!showTranslation)} style={{ marginRight: '0.5rem' }}>
                    {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
                </button>
                <button onClick={nextCard}>Следующая карточка</button>
            </div>
        </div>
    );
};

export default Cards;
