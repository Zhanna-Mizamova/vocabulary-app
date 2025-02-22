import React, { useState, useEffect } from 'react';
import WordCard from '../components/WordCard';

const Cards = () => {
    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [learnedWords, setLearnedWords] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch('https://67b9dd3951192bd378dea685.mockapi.io/api/v1/words');
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных');
                }
                const data = await response.json();
                setWords(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchWords();
    }, []);

    const nextCard = () => {
        setShowTranslation(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const handleShowTranslation = () => {
        if (!showTranslation) {
            setLearnedWords((prevCount) => prevCount + 1);
        }
        setShowTranslation(true);
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (words.length === 0) return <p>Нет слов для отображения.</p>;

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Карточки</h1>
            <p>Изучено слов: {learnedWords}</p>
            <div style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                width: '300px',
                margin: '0 auto',
            }}>
                <WordCard
                    word={words[currentIndex].word}
                    translation={words[currentIndex].translation}
                    showTranslation={showTranslation}
                    onShowTranslation={handleShowTranslation}
                />
                <button onClick={nextCard} style={{ marginTop: '10px' }}>
                    Следующее слово
                </button>
            </div>
        </div>
    );
};

export default Cards;

