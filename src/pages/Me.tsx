import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Wrapper } from '../modules/me/styles';

type State = Readonly<typeof initialState>;

const initialState = {};

class Me extends React.Component<any, any> {
  public static NOT_RELEASED = true;

  public state: State = initialState;

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props.store);
    return <Wrapper>This will be the dashboard...</Wrapper>;
  }
}

export default inject('store')(observer(Me));
