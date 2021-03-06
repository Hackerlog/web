import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

import { GroupWrapper, Errors, Label } from '../styles';

@observer
export default class SelectGroup extends Component {
  get value() {
    const { value } = this.props.field;
    if (typeof value === 'string') {
      return {
        label: value,
        value,
      };
    }

    return value;
  }

  handleOnChange = e => {
    this.props.field.updateValue(e);
  };

  render() {
    const { field, options, selectProps = {} } = this.props;

    return (
      <GroupWrapper>
        <Label htmlFor={field.name}>{field.label}</Label>
        <Select
          onChange={this.handleOnChange}
          name={field.name}
          id={field.name}
          value={this.value}
          options={options}
          isClearable
          {...selectProps}
        />
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
      </GroupWrapper>
    );
  }
}
