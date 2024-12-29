// import React from 'react';
// import WordTable from './components/WordTable';
// import './App.css'; 

// const App = () => {
//     const words = [
//         { id: 1, word: 'hello', translation: 'привет' },
//         { id: 2, word: 'world', translation: 'мир' },
//     ];

//     return (
//         <div style={{ fontFamily: 'var(--font-family)', backgroundColor: 'var(--background-color)', padding: '20px' }}>
//             <h1 style={{ textAlign: 'center' }}>Vocabulary App</h1>
//             <WordTable words={words} />
//         </div>
//     );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import WordTable from './components/WordTable';
import './App.css'; 

const App = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((data) => setWords(data));
    }, []);

    return (
        <div>
            <h1>Vocabulary App</h1>
            <WordTable words={words} />
        </div>
    );
};

export default App;


