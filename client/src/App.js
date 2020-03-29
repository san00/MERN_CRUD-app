import React from 'react'
import Create from './components/Create'
import ReadAndDelete from './components/ReadAndDelete'
import Navbar from './components/Navbar'
import Edit from './components/Edit'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar data-test='component-app' />
      <Route path="/" exact component={ReadAndDelete} data-test='component-app' />
      <Route path="/create" component={Create} data-test='component-app' />
      <Route path="/edit/:id" component={Edit} data-test='component-app' />
    </Router>
  );
}

export default App;
