import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
