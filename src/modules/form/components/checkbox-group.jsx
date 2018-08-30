import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { GroupWrapper, Input, Errors, Label } from '../styles';

const CheckboxWrapper = styled(GroupWrapper)`
  flex-direction: row;
  align-items: center;

  input {
    margin-right: 12px;
  }
`;

@observer
export default class InputGroup extends Component {
  handleOnChange = e => {
    this.props.field.updateValue(e.currentTarget.value);
  };

  render() {
    const { field } = this.props;

    return (
      <CheckboxWrapper>
        <Label htmlFor={field.name}>
          <Input
            type="checkbox"
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            onChange={this.handleOnChange}
            checked={field.value}
          />
          {field.label}
        </Label>
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
      </CheckboxWrapper>
    );
  }
}
