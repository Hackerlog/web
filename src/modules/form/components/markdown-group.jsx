import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Markdown from 'react-mde';
import Preview from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

import { GroupWrapper, Errors, Label } from '../styles';
import ToolbarIcon from './toolbar-icons';

@observer
export default class MarkdownGroup extends Component {
  get value() {
    if (typeof this.props.field.value === 'string') {
      return { markdown: this.props.field.value };
    }

    return this.props.field.value;
  }

  converter = new Preview.Converter();

  handleOnChange = e => {
    this.props.field.updateValue(e);
  };

  render() {
    const { field } = this.props;

    return (
      <GroupWrapper>
        <Label htmlFor={field.id}>{field.label}</Label>
        {field.hasErrors && field.isTouched ? <Errors>{field.errors[0]}</Errors> : null}
        <Markdown
          editorState={this.value}
          onChange={this.handleOnChange}
          layout="tabbed"
          buttonContentOptions={{
            iconProvider: name => <ToolbarIcon name={name} />,
          }}
          generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
        />
      </GroupWrapper>
    );
  }
}
