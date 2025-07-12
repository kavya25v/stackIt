// File: client/src/AnswerSection.js

import React, { useState } from 'react';

function AnswerSection({ questionId, onAnswerSubmit }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() !== '') {
      onAnswerSubmit(questionId, answer);
      setAnswer('');
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your answer..."
          rows="3"
          style={{ width: '100%', padding: '0.5rem' }}
        ></textarea>
        <button type="submit" style={{ marginTop: '0.5rem' }}>Submit Answer</button>
      </form>
    </div>
  );
}

export default AnswerSection;
