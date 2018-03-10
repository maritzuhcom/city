import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NoMatch from './components/common/NoMatch';

// NOTE this is where we add screens and their routes
const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </HashRouter>
);

export default Routes;
