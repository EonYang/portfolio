//@ts-nocheck
import React from "react";
import PortfolioPage from "./pages/PortfolioPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { testIfMobile } from "./utils/Tools";
import Header from "./components/Header";

const App = () => {
  const isMobile = testIfMobile();

  return (
    <>
      <Router basename="/portfolio">
        <Header />
        <Switch>
          <Route
            path="/about"
            component={AboutPage}
            isMobile={isMobile}
            exact
          />
          <Route path="/" component={PortfolioPage} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
