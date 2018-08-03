import React from 'react';
import { observer, inject } from 'mobx-react';

import { Wrapper } from '../modules/me/styles';

class Me extends React.Component {
  static NOT_RELEASED = true;

  state = {};

  render() {
    return <Wrapper>This will be the dashboard...</Wrapper>;
  }
}

export default inject('store')(observer(Me));
