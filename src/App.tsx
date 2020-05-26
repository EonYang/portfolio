//@ts-nocheck
import React, { useState, useCallback } from "react";
import PortfolioPage from "./pages/PortfolioPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { testIfMobile } from "./utils/Tools";
import Header from "./components/Header";

const App = () => {
  const isMobile = testIfMobile();
  const [scrolled, setScrolled] = useState(0);

  return (
    <>
      <Router basename="/portfolio">
        <Header />
        <Switch>
          <Route path="/about" exact>
            <AboutPage isMobile={isMobile} />
          </Route>
          <Route path="/" exact>
            <PortfolioPage isMobile={isMobile} />
          </Route>
          <Route />
        </Switch>
      </Router>
    </>
  );
};

export default App;
