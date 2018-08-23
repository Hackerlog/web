import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GroupWrapper, Input, Errors } from './styles';

@observer
export default class InputGroup extends Component {
  handleOnChange = e => {
    this.props.field.updateValue(e.currentTarget.value);
  };

  render() {
    const { field, type } = this.props;

    return field ? (
      <GroupWrapper>
        <label htmlFor={field.name}>{field.label}</label>
        <Input
          type={type}
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          onChange={this.handleOnChange}
          value={field.value}
        />
        {field.hasErrors && field.isDirty ? <Errors>{field.errors[0]}</Errors> : null}
      </GroupWrapper>
    ) : null;
  }
}
