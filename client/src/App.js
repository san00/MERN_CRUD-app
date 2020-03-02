import React from 'react'
import './App.css'
import Form from './components/Form'
import Data from './components/Data'
import Navbar from './components/Navbar'
import Edit from './components/Edit'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar data-test='component-app' />
      <Route path="/" exact component={Data} data-test='component-app' />
      <Route path="/create" component={Form} data-test='component-app' />
      <Route path="/edit/:id" component={Edit} data-test='component-app' />
    </Router>
  );
}

export default App;
