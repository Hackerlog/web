import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
  AsyncFourOhFour,
  AsyncComponents,
} from './routes';

const Pages = () => (
  <React.Fragment>
    <Route path="/" component={Tracking} />
    <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/login" component={hideFeature(AsyncLogin)} />
      <Route exact path="/signup" component={hideFeature(AsyncSignup)} />
      <Route exact path="/password-reset" component={hideFeature(AsyncPasswordReset)} />
      <Route exact path="/me" component={hideFeature(protect(AsyncMe))} />
      <Route exact path="/components" component={hideFeature(AsyncComponents)} />
      <Route exact path="/reset-password/:token" component={hideFeature(AsyncResetPassword)} />
      <Route component={AsyncFourOhFour} />
    </Switch>
  </React.Fragment>
);

export default Pages;
