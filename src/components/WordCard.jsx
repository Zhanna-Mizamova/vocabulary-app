import React, { useEffect, useRef } from 'react';

const WordCard = ({ word, translation, showTranslation, onShowTranslation }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [word]);

    return (
        <div className="word-card">
            <h3>{word}</h3>
            {showTranslation ? <p>{translation}</p> : null}
            <button ref={buttonRef} onClick={onShowTranslation}>
                Посмотреть перевод
            </button>
        </div>
    );
};

export default WordCard;
