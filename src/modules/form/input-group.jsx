import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GroupWrapper, Input, Errors, Label } from './styles';

@observer
export default class InputGroup extends Component {
  handleOnChange = e => {
    this.props.field.updateValue(e.currentTarget.value);
  };

  render() {
    const { field, type } = this.props;

    return (
      <GroupWrapper>
        <Label htmlFor={field.name}>{field.label}</Label>
        <Input
          type={type}
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          onChange={this.handleOnChange}
          value={field.value}
        />
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
      </GroupWrapper>
    );
  }
}
