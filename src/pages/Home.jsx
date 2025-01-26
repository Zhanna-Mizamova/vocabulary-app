import React from 'react';

const wordList = [
    { id: 1, word: 'apple', translation: 'яблоко' },
    { id: 2, word: 'book', translation: 'книга' },
    { id: 3, word: 'car', translation: 'машина' },
];

const Home = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>Таблица слов</h1>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Слово</th>
                        <th>Перевод</th>
                    </tr>
                </thead>
                <tbody>
                    {wordList.map((word) => (
                        <tr key={word.id}>
                            <td>{word.id}</td>
                            <td>{word.word}</td>
                            <td>{word.translation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
