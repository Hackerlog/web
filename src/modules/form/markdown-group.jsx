import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Showdown from 'showdown';
import Markdown from 'react-mde';
import Preview from 'react-markdown';

import { GroupWrapper, Errors, Label } from './styles';

@observer
export default class MarkdownGroup extends Component {
  converter = new Showdown.Converter();

  handleOnChange = e => {
    this.props.field.updateValue(e);
  };

  render() {
    const { field } = this.props;
    return (
      <GroupWrapper>
        <Label htmlFor={field.id}>{field.label}</Label>
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
        <Markdown editorState={field.value} onChange={this.handleOnChange} />
        <Preview>{field.value.markdown}</Preview>
      </GroupWrapper>
    );
  }
}
