import React from "react";
import CreateVacancy from "./components/CreateVacancy";
import VacancyList from "./components/VacancyList";
import Navbar from "./components/Navbar";
import EditVacancy from "./components/EditVacancy";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router data-test="component-app">
      <Navbar />
      <Route path="/" exact component={VacancyList} />
      <Route path="/create" component={CreateVacancy} />
      <Route path="/edit/:id" component={EditVacancy} />
    </Router>
  );
}

export default App;
