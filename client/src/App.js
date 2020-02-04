import React from 'react';
import './App.css';
import Form from './components/Form';
import Data from './components/Data';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component ={Data} />
      <Route path="/create" component ={Form} />
    </Router>
  );
}

export default App;
