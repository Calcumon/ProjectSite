import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>

      </header>
    </div>
  );
}

export default App;
