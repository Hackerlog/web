import * as React from 'react';
import { Switch, Route } from 'react-router';

import Tracking from '../components/Tracking';
import protect from '../components/ProtectedRoute';
import hideFeature from '../components/FeatureRoute';
import {
  AsyncHome,
  AsyncLogin,
  AsyncSignup,
  AsyncPasswordReset,
  AsyncMe,
  AsyncResetPassword,
} from './routes';

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
