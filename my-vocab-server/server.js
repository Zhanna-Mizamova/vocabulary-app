const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let wordsDB = [
    { id: 1, word: 'apple', translation: 'яблоко' },
    { id: 2, word: 'book', translation: 'книга' },
    { id: 3, word: 'car', translation: 'машина' },
];

app.post('/api/update-word', (req, res) => {
    const { id, word, translation } = req.body;
    const index = wordsDB.findIndex(w => w.id === id);
    if (index !== -1) {
        wordsDB[index] = { id, word, translation };
        res.json({ status: 'success', updated: wordsDB[index] });
    } else {
        res.status(404).json({ status: 'error', message: 'Word not found' });
    }
});

app.delete('/api/delete-word', (req, res) => {
    const { id } = req.body;
    wordsDB = wordsDB.filter(w => w.id !== id);
    res.json({ status: 'success', deletedId: id });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
