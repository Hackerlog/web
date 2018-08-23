import * as loadable from 'react-loadable';

import Loading from '../components/loading';

export const AsyncHome = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home'),
  loading: Loading,
});

export const AsyncLogin = loadable({
  loader: () => import(/* webpackChunkName: "login" */ './login'),
  loading: Loading,
});

export const AsyncSignup = loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './signup'),
  loading: Loading,
});

export const AsyncMe = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './me'),
  loading: Loading,
});

export const AsyncPasswordReset = loadable({
  loader: () => import(/* webpackChunkName: "password-reset" */ './password-reset'),
  loading: Loading,
});

export const AsyncResetPassword = loadable({
  loader: () => import(/* webpackChunkName: "reset-password" */ './reset-password'),
  loading: Loading,
});

export const AsyncFourOhFour = loadable({
  loader: () => import(/* webpackChunkName: "404" */ './404'),
  loading: Loading,
});

export const AsyncComponents = loadable({
  loader: () => import(/* webpackChunkName: "components" */ './components'),
  loading: Loading,
});
