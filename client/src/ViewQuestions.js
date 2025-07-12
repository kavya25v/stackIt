import React, { useEffect, useState } from 'react';

function ViewQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched questions:', data); // ✅ Confirm fetch
        setQuestions(data);                      // ✅ Save to state
      })
      .catch((err) => console.error('Error fetching questions:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 All Questions</h2>
      {questions.length === 0 ? (
        <p>No questions yet.</p>
      ) : (
        <ul>
          {questions.map((q) => (
            <li key={q.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
              <strong style={{ fontSize: '1.2rem' }}>{q.title}</strong>
              <p>{q.description}</p>
              <p><b>Tags:</b> {q.tags.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewQuestions;
