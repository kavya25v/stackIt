const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let questions = []; // In-memory array

// POST: Save a question
app.post('/api/questions', (req, res) => {
  const { title, description, tags } = req.body;
  const newQuestion = { id: Date.now(), title, description, tags };
  questions.push(newQuestion); // ✅ Very important
  console.log('New Question:', newQuestion);
  res.status(201).json({ message: 'Question saved successfully!', question: newQuestion });
});

// GET: Fetch all questions
app.get('/api/questions', (req, res) => {
  res.json(questions); // ✅ Sends the list
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
