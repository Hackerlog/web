import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GroupWrapper as Wrapper, Errors, Label } from '../styles';

@observer
export default class InputGroup extends Component {
  static Label = ({ field }) => <Label htmlFor={field.name}>{field.label}</Label>;

  static Errors = ({ field }) =>
    field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null;

  handleOnChange = e => {
    this.props.field.updateValue(e.currentTarget.value);
  };

  render() {
    return (
      <Wrapper>
        {React.Children.map(this.props.children, child => React.cloneElement(child, this.props))}
      </Wrapper>
    );
  }
}
