import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import CustomerHome from '../components/Customer/';
import Login from '../pages/Login';
import RegisterAccount from '../pages/Register';
import Page404 from '../pages/Page404';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} isPrivate />
      <Route exact path="/customer" component={CustomerHome} isPrivate />
      <Route exact path="/register" component={RegisterAccount} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
