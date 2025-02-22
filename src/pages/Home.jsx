import React, { useState } from 'react';

const wordList = [
    { id: 1, word: 'apple', translation: 'яблоко' },
    { id: 2, word: 'book', translation: 'книга' },
    { id: 3, word: 'car', translation: 'машина' },
];

const Home = () => {
    const [words, setWords] = useState(wordList);

    const updateWord = (id, newWord, newTranslation) => {
        const updatedWords = words.map(word =>
            word.id === id ? { ...word, word: newWord, translation: newTranslation } : word
        );
        setWords(updatedWords);
        sendUpdateToServer(id, newWord, newTranslation);
    };

    const deleteWord = (id) => {
        const filteredWords = words.filter(word => word.id !== id);
        setWords(filteredWords);
        sendDeleteToServer(id);
    };

    const sendUpdateToServer = (id, word, translation) => {
        fetch('/api/update-word', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, word, translation })
        }).then(response => response.json())
          .then(data => console.log('Updated:', data));
    };

    const sendDeleteToServer = (id) => {
        fetch('/api/delete-word', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        }).then(response => response.json())
          .then(data => console.log('Deleted:', data));
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Изученные слова</h1>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Слово</th>
                        <th>Перевод</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(({ id, word, translation }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td><input type="text" value={word} onChange={(e) => updateWord(id, e.target.value, translation)} /></td>
                            <td><input type="text" value={translation} onChange={(e) => updateWord(id, word, e.target.value)} /></td>
                            <td>
                                <button onClick={() => deleteWord(id)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;

