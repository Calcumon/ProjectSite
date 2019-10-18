import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
