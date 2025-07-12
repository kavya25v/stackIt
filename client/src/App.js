import React from 'react';
import AskQuestion from './AskQuestion';
import ViewQuestions from './ViewQuestions'; // 👈 important!

function App() {
  console.log("App.js rendering");
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>🧠 StackIt</h1>
      <AskQuestion />
      <hr />
      <ViewQuestions />  {/* 👈 must be here to render the list */}
    </div>
  );
}

export default App;
