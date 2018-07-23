import * as React from 'react';
import * as loadable from 'react-loadable';
import { Switch, Route } from 'react-router';

import Loading from '../components/Loading';
import Tracking from '../components/Tracking';
import protect from '../components/ProtectedRoute';

const AsyncHome = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: Loading,
});

const AsyncLogin = loadable({
  loader: () => import(/* webpackChunkName: "login" */ './Login'),
  loading: Loading,
});

const AsyncSignup = loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './Signup'),
  loading: Loading,
});

const AsyncMe = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './Me'),
  loading: Loading,
});

const Pages = () => (
  <React.Fragment>
    <Route path="/" component={Tracking} />
    <Switch>
      <Route exact={true} path="/" component={AsyncHome} />
      <Route exact={true} path="/login" component={AsyncLogin} />
      <Route exact={true} path="/signup" component={AsyncSignup} />
      <Route exact={true} path="/me" component={protect(AsyncMe)} />
    </Switch>
  </React.Fragment>
);

export default Pages;
