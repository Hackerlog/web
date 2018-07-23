import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router';

const protect = (ProtectedRoute: any) => {
  class ProtectHoc extends React.Component<any, {}> {
    private isLoggedIn = (): boolean => {
      return this.props.store.userStore.isLoggedIn();
    };

    public render() {
      if (!this.isLoggedIn()) {
        return <Redirect to="/login" />;
      }

      return <ProtectedRoute {...this.props} />;
    }
  }

  return inject('store')(observer(ProtectHoc));
};

export default protect;
