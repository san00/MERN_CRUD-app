import React from 'react';
import './App.css';
import Form from './components/Form';
import Data from './components/Data';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <h1>Job vacancies</h1>
      <Route path="/" exact component ={Data} />
      <Route path="/create" component ={Form} />
    </Router>
  );
}

export default App;
