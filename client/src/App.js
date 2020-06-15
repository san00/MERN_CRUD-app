import React from 'react'
import Create from './components/Create'
import ReadAndDelete from './components/ReadAndDelete'
import Navbar from './components/Navbar'
import Edit from './components/Edit'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router data-test='component-app' >
      <Navbar/>
      <Route path="/" exact component={ReadAndDelete} />
      <Route path="/create" component={Create} />
      <Route path="/edit/:id" component={Edit} />
    </Router>
  );
}

export default App;
