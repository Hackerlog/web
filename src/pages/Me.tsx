import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Wrapper } from '../modules/me/styles';
import logger from '../services/logger';

type State = Readonly<typeof initialState>;

const initialState = {};

class Me extends React.Component {
  public state: State = initialState;

  public componentDidMount() {
    logger.debug(this.props);
  }

  public render() {
    return <Wrapper>This will be the dashboard...</Wrapper>;
  }
}

export default inject('routing', 'root')(observer(Me));
