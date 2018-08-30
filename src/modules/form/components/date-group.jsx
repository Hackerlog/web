import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MonthPicker from 'react-month-picker-input';
import get from 'lodash/get';

import { GroupWrapper, Errors, Label } from '../styles';
import '../styles/date-picker.css';

@observer
export default class DateGroup extends Component {
  get value() {
    const { value } = this.props.field;

    if (typeof value === 'string') {
      const dateArr = value.split('/');

      let month = '';
      let year = '';

      if (dateArr && dateArr.length === 2) {
        month = parseInt(dateArr[0], 10) - 1;
        year = parseInt(dateArr[1], 10);
      }

      return {
        month,
        year,
      };
    }

    return {
      month: get(value, 'month', ''),
      year: get(value, 'year', ''),
    };
  }

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
          month={this.value.month}
          year={this.value.year}
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
