// File: client/src/AskQuestion.js
import { toast } from 'react-toastify';

import React, { useState } from 'react';
// Uncomment below if you want rich text editor (after resolving ReactQuill setup)
//import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

function AskQuestion() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    title: title.trim(),
    description: description.trim(),
    tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
  };

  if (!payload.title || !payload.description || payload.tags.length === 0) {
    toast.error("⚠️ All fields are required");
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      toast.success("✅ Question submitted successfully!");
      setTitle('');
      setDescription('');
      setTags('');
    } else {
      toast.error("❌ Failed to submit question.");
    }

  } catch (error) {
    toast.error("❌ Something went wrong. Please try again.");
    console.error(error);
  }
};


  return (
    <div style={{ padding: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />

        {/* Use textarea if ReactQuill not working */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your question..."
          rows="4"
          style={{ width: '100%', padding: '0.5rem' }}
        ></textarea>

        {/* Uncomment below to use ReactQuill when ready */}
        {/*
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Describe your question..."
        />
        */}

        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
          style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
        />

        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default AskQuestion;
