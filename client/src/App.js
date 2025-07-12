import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';

import AskQuestion from './AskQuestion';
import ViewQuestions from './ViewQuestions';

function App() {
  const isAdmin = true; // Later change to false to simulate a normal user
  const [darkMode, setDarkMode] = useState(false);


  return (
  <div
    style={{
      backgroundColor: darkMode ? '#1e1e1e' : '#fff',
      color: darkMode ? '#f1f1f1' : '#000',
      minHeight: '100vh',
      padding: '1rem'
    }}
  >
    {/* 🌙 Toggle button */}
    <div style={{ textAlign: 'right' }}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
    <ToastContainer position="top-center" autoClose={2500} />


    <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>🧠 StackIt</h1>
    <AskQuestion />
    <hr />
    <ViewQuestions isAdmin={isAdmin} />
    
  </div>
);

}

export default App;
