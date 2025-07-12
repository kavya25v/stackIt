// File: client/src/ViewQuestions.js

import React, { useEffect, useState } from 'react';
import AnswerSection from './AnswerSection';

function ViewQuestions({ isAdmin })
 {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const allTags = [...new Set(questions.flatMap(q => q.tags || []))];
  const [comments, setComments] = useState({});


  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        console.log('📦 Fetched questions:', data);
      })
      .catch((err) => console.error('❌ Error fetching questions:', err));
  }, []);

  const handleAnswerSubmit = (questionId, answerText) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? { ...q, answers: [...(q.answers || []), answerText] }
          : q
      )
    );
  };

  const handleUpvote = (id) => {
  setQuestions(prev =>
    prev.map(q => q.id === id ? { ...q, votes: (q.votes || 0) + 1 } : q)
  );
};

const handleDownvote = (id) => {
  setQuestions(prev =>
    prev.map(q => q.id === id ? { ...q, votes: (q.votes || 0) - 1 } : q)
  );
};

  const handleAcceptAnswer = (questionId, answerIndex) => {
  setQuestions(prev =>
    prev.map(q =>
      q.id === questionId
        ? { ...q, acceptedAnswer: answerIndex }
        : q
    )
  );
};
const handleCommentSubmit = (questionId, answerIndex, commentText) => {
  const key = `${questionId}-${answerIndex}`;
  setComments(prev => ({
    ...prev,
    [key]: [...(prev[key] || []), commentText]
  }));
};


  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 All Questions</h2>
      <input
  type="text"
  placeholder="🔍 Search questions..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
/>
<select
  value={selectedTag}
  onChange={(e) => setSelectedTag(e.target.value)}
  style={{ padding: '0.5rem', marginBottom: '1rem' }}
>
  <option value="">🎯 Filter by tag</option>
  {allTags.map((tag, i) => (
    <option key={i} value={tag}>{tag}</option>
  ))}
</select>

      {questions.length === 0 ? (
        <p>No questions yet.</p>
      ) : (
        <ul>
          {questions
  .filter((q) =>
    (q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     q.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTag === '' || q.tags?.includes(selectedTag))
  )
  .map((q) => (

            <li
              key={q.id}
              style={{
                marginBottom: '2rem',
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
              }}

            >
              <strong style={{ fontSize: '1.2rem' }}>{q.title}</strong>
              <div style={{ margin: '0.5rem 0' }}>
              <button onClick={() => handleUpvote(q.id)}>👍</button>
              <span style={{ margin: '0 1rem' }}>{q.votes || 0}</span>
              <button onClick={() => handleDownvote(q.id)}>👎</button>
              </div>

              <p dangerouslySetInnerHTML={{ __html: q.description }}></p>
              <p><b>Tags:</b> {q.tags?.join(', ')}</p>

              <h4>Answers:</h4>
              {q.answers?.length ? (
                <ul>
                  {q.answers.map((a, i) => (
  <li
    key={i}
    style={{
      backgroundColor: q.acceptedAnswer === i ? '#d4edda' : 'transparent',
      padding: '0.5rem',
      borderRadius: '5px',
      marginBottom: '0.5rem',
    }}
  >
    {a}
    {q.acceptedAnswer === i ? (
  <span style={{ color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>
    ✅ Accepted
    {isAdmin && (
      <span style={{ marginLeft: '8px', color: '#555' }}>👑 Admin</span>
    )}
  </span>
) : (
  isAdmin && (
    <button
      onClick={() => handleAcceptAnswer(q.id, i)}
      style={{ marginLeft: '10px' }}
    >
      ✅ Accept
    </button>
  )
)}

{/* 💬 Comment input */}
<div style={{ marginTop: '0.5rem' }}>
  <input
    type="text"
    placeholder="Add a comment..."
    onKeyDown={(e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        handleCommentSubmit(q.id, i, e.target.value.trim());
        e.target.value = '';
      }
    }}
    style={{ width: '100%', padding: '0.3rem' }}
  />
</div>

{/* 📝 Show existing comments */}
{comments[`${q.id}-${i}`]?.map((comment, idx) => (
  <p key={idx} style={{ fontSize: '0.9rem', marginLeft: '1rem', color: '#888' }}>
    💬 {comment}
  </p>
))}


  </li>
))}

                </ul>
              ) : (
                <p>No answers yet.</p>
              )}

              <AnswerSection questionId={q.id} onAnswerSubmit={handleAnswerSubmit} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewQuestions;
