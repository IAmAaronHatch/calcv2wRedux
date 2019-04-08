import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ LandingPage } />
          <Route path='calculator' component={ Calculator } />
        </Switch>
      </div>
    );
  }
}

export default App;
