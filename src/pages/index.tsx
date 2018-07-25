import * as React from 'react';
import * as loadable from 'react-loadable';
import { Switch, Route } from 'react-router';

import Loading from '../components/Loading';
import Tracking from '../components/Tracking';
import protect from '../components/ProtectedRoute';
import hideFeature from '../components/FeatureRoute';

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

const AsyncPasswordReset = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './PasswordReset'),
  loading: Loading,
});

const AsyncResetPassword = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './ResetPassword'),
  loading: Loading,
});

const Pages = () => (
  <React.Fragment>
    <Route path="/" component={Tracking} />
    <Switch>
      <Route exact={true} path="/" component={AsyncHome} />
      <Route exact={true} path="/login" component={hideFeature(AsyncLogin)} />
      <Route exact={true} path="/signup" component={hideFeature(AsyncSignup)} />
      <Route exact={true} path="/password-reset" component={AsyncPasswordReset} />
      <Route exact={true} path="/me" component={hideFeature(protect(AsyncMe))} />
      <Route exact={true} path="/reset-password/:token" component={AsyncResetPassword} />
    </Switch>
  </React.Fragment>
);

export default Pages;
