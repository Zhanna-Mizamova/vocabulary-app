import React, { useState } from 'react';
import WordCard from '../components/WordCard';

const wordList = [
    { id: 1, word: 'apple', translation: 'яблоко' },
    { id: 2, word: 'book', translation: 'книга' },
    { id: 3, word: 'car', translation: 'машина' },
];

const Cards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [learnedWords, setLearnedWords] = useState(0); 

    const nextCard = () => {
        setShowTranslation(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    };

    const handleShowTranslation = () => {
        if (!showTranslation) {
            setLearnedWords((prevCount) => prevCount + 1);
        }
        setShowTranslation(true);
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Карточки</h1>
            <p>Изучено слов: {learnedWords}</p> {/*количество изученных слов */}
            <div style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                width: '300px',
                margin: '0 auto',
            }}>
                <WordCard
                    word={wordList[currentIndex].word}
                    translation={wordList[currentIndex].translation}
                    showTranslation={showTranslation}
                    onShowTranslation={handleShowTranslation}
                />
                <button onClick={nextCard} style={{ marginTop: '10px' }}>Следующее слово</button>
            </div>
        </div>
    );
};

export default Cards;
