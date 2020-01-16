import React from 'react';
import './App.css';
import Form from './components/Form';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job vacancies</h1>
        <Form />
        <Data />
      </header>
    </div>
  );
}

export default App;
