import React, { useState } from 'react';

const EditableCard = ({ initialWord, initialTranslation }) => {
  const [word, setWord] = useState(initialWord);
  const [translation, setTranslation] = useState(initialTranslation);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (word && translation) {
      setIsEditing(false);
    }
  };

  return (
    <div className="word-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <input
            type="text"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
          <button onClick={handleSave} disabled={!word || !translation}>
            Сохранить
          </button>
        </>
      ) : (
        <>
          <h3>{word}</h3>
          <p>{translation}</p>
          <button onClick={() => setIsEditing(true)}>
            Редактировать
          </button>
        </>
      )}
    </div>
  );
};

export default EditableCard;
