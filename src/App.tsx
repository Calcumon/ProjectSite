import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPageRedesign from './components/LandingPageRedesign';

const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LandingPageRedesign />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
