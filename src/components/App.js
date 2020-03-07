import React, { Component } from 'react';
// import './App.css';
import HomePage from '../pages/HomePage';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App" >
          <NavBar />
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/portfolio' component={HomePage} exact />
            </Switch>
          </div>
      </Router>
    )
  }
}

export default App;