import React, { createContext, useReducer, useEffect, useContext } from 'react';

export const WordsContext = createContext();

const initialState = {
  words: [],
  loading: false,
  error: null,
};

const wordsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WORDS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_WORDS_SUCCESS':
      return { ...state, loading: false, words: action.payload };
    case 'FETCH_WORDS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_WORD':
      return { 
        ...state, 
        words: state.words.map(word => word.id === action.payload.id ? action.payload : word)
      };
    case 'DELETE_WORD':
      return { 
        ...state, 
        words: state.words.filter(word => word.id !== action.payload)
      };
    default:
      return state;
  }
};

export const WordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wordsReducer, initialState);

  const fetchWords = async () => {
    dispatch({ type: 'FETCH_WORDS_REQUEST' });
    try {
      const response = await fetch('https://67b9dd3951192bd378dea685.mockapi.io/api/v1/words');
      if (!response.ok) throw new Error('Ошибка при получении данных');
      const data = await response.json();
      dispatch({ type: 'FETCH_WORDS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_WORDS_FAILURE', payload: error.message });
    }
  };

  const updateWord = async (id, text) => {
    try {
      const response = await fetch('http://localhost:5000/api/update-word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, text })
      });
      const updatedWord = await response.json();
      dispatch({ type: 'UPDATE_WORD', payload: updatedWord.updated });
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };

  const deleteWord = async (id) => {
    try {
      await fetch('http://localhost:5000/api/delete-word', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      dispatch({ type: 'DELETE_WORD', payload: id });
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordsContext.Provider value={{ ...state, fetchWords, updateWord, deleteWord }}>
      {children}
    </WordsContext.Provider>
  );
};

export const WordsList = () => {
  const { words, loading, error, updateWord, deleteWord } = useContext(WordsContext);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <ul>
      {words.map(word => (
        <li key={word.id}>
          {word.text}
          <button onClick={() => updateWord(word.id, 'Новое слово')}>Изменить</button>
          <button onClick={() => deleteWord(word.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

