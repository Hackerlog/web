import loadable from 'react-loadable';

import { Loading as loading } from '../modules/common/components';

export const AsyncHome = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home'),
  loading,
});

export const AsyncLogin = loadable({
  loader: () => import(/* webpackChunkName: "login" */ './login'),
  loading,
});

export const AsyncSignup = loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './signup'),
  loading,
});

export const AsyncMe = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './me'),
  loading,
});

export const AsyncPasswordReset = loadable({
  loader: () => import(/* webpackChunkName: "password-reset" */ './password-reset'),
  loading,
});

export const AsyncResetPassword = loadable({
  loader: () => import(/* webpackChunkName: "reset-password" */ './reset-password'),
  loading,
});

export const AsyncFourOhFour = loadable({
  loader: () => import(/* webpackChunkName: "404" */ './404'),
  loading,
});

export const AsyncComponents = loadable({
  loader: () => import(/* webpackChunkName: "components" */ './components'),
  loading,
});
