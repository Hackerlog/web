import * as loadable from 'react-loadable';

import Loading from '../components/Loading';

export const AsyncHome = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: Loading,
});

export const AsyncLogin = loadable({
  loader: () => import(/* webpackChunkName: "login" */ './Login'),
  loading: Loading,
});

export const AsyncSignup = loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './Signup'),
  loading: Loading,
});

export const AsyncMe = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './Me'),
  loading: Loading,
});

export const AsyncPasswordReset = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './PasswordReset'),
  loading: Loading,
});

export const AsyncResetPassword = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './ResetPassword'),
  loading: Loading,
});
