import React, { Component } from "react";
// import './App.css';
import PortfolioPage from "../pages/PortfolioPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "../pages/AboutPage";

class App extends Component {
  render() {
    return (
      <Router basename="/portfolio">
        <Switch>
          <Route path="/about" component={AboutPage} exact />
          <Route path="/" component={PortfolioPage} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
