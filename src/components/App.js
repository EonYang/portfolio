import React, { Component } from 'react';
// import './App.css';
import HomePage from '../pages/HomePage';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
// import AboutPage from '../pages/AboutPage';
import NavBar from './NavBar';
import NotFoundPage from "../pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App" >
          <NavBar />
          <div id="page-body" >
            <Switch>
              <Route path='/' component={HomePage} exact />
              {/* <Route path='/about' component={AboutPage} /> */}
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;