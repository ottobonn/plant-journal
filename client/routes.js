import React from 'react';
import {Router, Route, Switch} from 'react-router';

import Home from './Home';
import PlantDetail from './PlantDetail';

import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/plant/:plantID" component={PlantDetail} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)
