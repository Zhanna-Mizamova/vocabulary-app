import React, { useState } from 'react';

const WordTable = ({ words }) => {
    const [editingWord, setEditingWord] = useState(null);

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
                <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Word</th>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Translation</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.id}>
                        {editingWord === word.id ? (
                            <>
                                <td><input type="text" defaultValue={word.word} /></td>
                                <td><input type="text" defaultValue={word.translation} /></td>
                                <td>
                                    <button onClick={() => setEditingWord(null)}>Save</button>
                                    <button onClick={() => setEditingWord(null)}>Cancel</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{word.word}</td>
                                <td>{word.translation}</td>
                                <td>
                                    <button onClick={() => setEditingWord(word.id)}>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default WordTable;
