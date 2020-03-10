import React, { Component } from 'react';
// import './App.css';
import PortfolioPage from '../pages/PortfolioPage';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router >
          <NavBar />
          <Switch>
            <Route path='/' component={PortfolioPage} exact />
            <Route path='/portfolio' component={PortfolioPage} exact />
          </Switch>
      </Router>
    )
  }
}

export default App;