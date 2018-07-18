import * as React from 'react';
import * as loadable from 'react-loadable';
import { Switch, Route } from 'react-router';

import Loading from '../components/Loading';
import Tracking from '../components/Tracking';

const AsyncHome = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: Loading,
});

const Pages = () => (
  <React.Fragment>
    <Route path="/" component={Tracking} />
    <Switch>
      <Route exact={true} path="/" component={AsyncHome} />
    </Switch>
  </React.Fragment>
);

export default Pages;
