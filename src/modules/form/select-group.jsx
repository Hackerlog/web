import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

import { GroupWrapper, Errors, Label } from './styles';

@observer
export default class SelectGroup extends Component {
  handleOnChange = e => {
    this.props.field.updateValue(e);
  };

  render() {
    const { field, options } = this.props;
    return (
      <GroupWrapper>
        <Label htmlFor={field.name}>{field.label}</Label>
        <Select
          onChange={this.handleOnChange}
          name={field.name}
          id={field.name}
          value={field.value}
          options={options}
          isClearable
        />
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
      </GroupWrapper>
    );
  }
}
