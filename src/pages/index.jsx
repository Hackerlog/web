import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Tracking, protectRoute, featureFlag } from '../modules/common/components';
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
      <Route exact path="/login" component={featureFlag(AsyncLogin)} />
      <Route exact path="/signup" component={featureFlag(AsyncSignup)} />
      <Route exact path="/password-reset" component={featureFlag(AsyncPasswordReset)} />
      <Route exact path="/me" component={featureFlag(protectRoute(AsyncMe))} />
      <Route exact path="/components" component={featureFlag(AsyncComponents)} />
      <Route exact path="/reset-password/:token" component={featureFlag(AsyncResetPassword)} />
      <Route component={AsyncFourOhFour} />
    </Switch>
  </React.Fragment>
);

export default Pages;
