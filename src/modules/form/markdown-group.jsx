import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GroupWrapper, Errors, Label } from './styles';

@observer
export default class MarkdownGroup extends Component {
  handleOnChange = e => {
    this.props.field.updateValue(e.currentTarget.value);
  };

  render() {
    const { field } = this.props;
    return (
      <GroupWrapper>
        <Label htmlFor={field.id}>{field.label}</Label>
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
        <textarea value={field.value} onChange={this.handleOnChange} />
      </GroupWrapper>
    );
  }
}
