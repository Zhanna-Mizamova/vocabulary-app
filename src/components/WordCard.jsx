import React, { useState, useEffect, useRef } from 'react';

const WordCard = ({ word, translation, showTranslation, onShowTranslation }) => {
    const [editableWord, setEditableWord] = useState(word);
    const [editableTranslation, setEditableTranslation] = useState(translation);
    const [isEditing, setIsEditing] = useState(false);

    const buttonRef = useRef(null);

    useEffect(() => {
        setEditableWord(word);
        setEditableTranslation(translation);
        setIsEditing(false);
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [word, translation]);

    const handleSave = () => {
        if (editableWord && editableTranslation) {
            setIsEditing(false);
        }
    };

    return (
        <div className="word-card">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editableWord}
                        onChange={(e) => setEditableWord(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editableTranslation}
                        onChange={(e) => setEditableTranslation(e.target.value)}
                    />
                    <button onClick={handleSave} disabled={!editableWord || !editableTranslation}>
                        Сохранить
                    </button>
                </>
            ) : (
                <>
                    <h3>{editableWord}</h3>
                    {showTranslation && <p>{editableTranslation}</p>}
                    <button ref={buttonRef} onClick={onShowTranslation}>
                        Посмотреть перевод
                    </button>
                    <button onClick={() => setIsEditing(true)}>
                        Редактировать
                    </button>
                </>
            )}
        </div>
    );
};

export default WordCard;
