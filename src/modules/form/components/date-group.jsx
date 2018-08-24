import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MonthPicker from 'react-month-picker-input';

import { GroupWrapper, Errors, Label } from '../styles';
import '../styles/date-picker.css';

@observer
export default class InputGroup extends Component {
  handleOnChange = date => {
    this.props.field.updateValue(date);
  };

  render() {
    const { field } = this.props;

    return (
      <GroupWrapper>
        <Label htmlFor={field.name}>{field.label}</Label>
        <MonthPicker
          placeholderText={field.placeholder}
          onChange={this.handleOnChange}
          value={field.value}
          closeOnSelect
          inputProps={{
            name: field.name,
            id: field.name,
          }}
        />
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
      </GroupWrapper>
    );
  }
}
