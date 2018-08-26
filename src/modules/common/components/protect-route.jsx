import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

const protectRoute = ProtectedRoute => {
  class ProtectHoc extends React.Component {
    isLoggedIn = () => this.props.store.userStore.isLoggedIn();

    render() {
      if (!this.isLoggedIn()) {
        return <Redirect to="/login" />;
      }

      return <ProtectedRoute {...this.props} />;
    }
  }

  return inject('store')(observer(ProtectHoc));
};

export default protectRoute;
