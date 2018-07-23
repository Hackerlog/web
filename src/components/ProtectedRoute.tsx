import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router';

import { IS_RELEASED } from '../utils/constants';

const protect = (ProtectedRoute: any) => {
  class ProtectHoc extends React.Component<any, {}> {
    private isLoggedIn = (): boolean => {
      return this.props.store.userStore.isLoggedIn();
    };

    public render() {
      switch (true) {
        case !IS_RELEASED && ProtectedRoute.NOT_RELEASED:
          return <Redirect to="/" />;
        case !this.isLoggedIn():
          return <Redirect to="/login" />;
        default:
          return <ProtectedRoute {...this.props} />;
      }
    }
  }

  return inject('store')(observer(ProtectHoc));
};

export default protect;
