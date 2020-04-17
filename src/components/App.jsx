import React, { Component } from 'react';
// import './App.css';
import PortfolioPage from '../pages/PortfolioPage';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import AboutPage from '../pages/AboutPage';

class App extends Component {
  render() {
    return (
      <Router >
          <Switch>
            <Route path='/' component={PortfolioPage} exact />
            <Route path='/portfolio' component={PortfolioPage} exact />
            <Route path='/about' component={AboutPage} exact />
          </Switch>
      </Router>
    )
  }
}

export default App;