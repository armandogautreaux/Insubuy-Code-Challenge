import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import history from '../history';
import HomePage from './pages/HomePage';
import QuoteResults from './pages/QuoteResults';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/results" exact component={QuoteResults} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
