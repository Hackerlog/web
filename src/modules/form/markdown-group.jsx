import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GroupWrapper, Errors } from './styles';

@observer
export default class MarkdownGroup extends Component {
  handleOnChange = e => {
    this.props.field.updateValue(e.currentTarget.value);
  };

  render() {
    const { field } = this.props;
    return (
      <GroupWrapper>
        <label htmlFor={field.id}>{field.label}</label>
        {field.hasErrors && field.isDirty ? <Errors>{field.errors[0]}</Errors> : null}
        <textarea value={field.value} onChange={this.handleOnChange} />
      </GroupWrapper>
    );
  }
}
