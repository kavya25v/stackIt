import React, { useState } from 'react';

function AskQuestion() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const question = {
    title,
    description,
    tags: tags.split(',').map(tag => tag.trim())
  };

  try {
    const response = await fetch('http://localhost:5000/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    });

    const data = await response.json();
    console.log('✅ Question saved to backend:', data);
    alert('Question saved successfully!');

    // Reset the form
    setTitle('');
    setDescription('');
    setTags('');
  } catch (error) {
    console.error('❌ Error saving question:', error);
    alert('Failed to save question');
  }
};

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 Ask a New Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </div>

        <div>
          <label>Description:</label><br />
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </div>

        <div>
          <label>Tags (comma separated):</label><br />
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit Question
        </button>
      </form>
    </div>
  );
}

export default AskQuestion;
