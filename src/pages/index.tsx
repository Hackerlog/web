import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Switch, Route } from 'react-router';

import Loading from '../components/Loading';

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: Loading,
});

const Pages = () => (
  <Switch>
    <Route exact={true} path="/" component={AsyncHome} />
  </Switch>
);

export default Pages;
