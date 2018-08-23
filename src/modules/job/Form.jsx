import React, { Component } from 'react';
import { observer } from 'mobx-react';

import CreateForm from '../form';
import { isRequired } from '../form/validators';
import InputGroup from '../form/input-group';
import SelectGroup from '../form/select-group';
import MarkdownGroup from '../form/markdown-group';
import { states } from '../../utils/constants';

const options = states.map(state => ({
  value: state,
  label: state,
}));

export const jobForm = new CreateForm([
  {
    name: 'companyName',
    label: 'Company name?',
    placeholder: 'Microsoft',
    validators: [isRequired],
    initialValue: '',
  },
  {
    name: 'position',
    label: 'Job title?',
    placeholder: 'Software Engineer',
    validators: [isRequired],
    initialValue: '',
  },
  {
    name: 'isCurrentJob',
    label: 'Current job?',
    placeholder: '',
    initialValue: '',
  },
  {
    name: 'startDate',
    label: 'Start date?',
    placeholder: 'July 2016',
    validators: [isRequired],
    initialValue: '',
  },
  {
    name: 'endDate',
    label: 'End date?',
    placeholder: 'September 2018',
    initialValue: '',
  },
  {
    name: 'isRemoteJob',
    label: 'Is this job remote?',
    initialValue: '',
    placeHolder: '',
  },
  {
    name: 'city',
    label: `Company's city?`,
    placeholder: 'Foster City',
    initialValue: '',
  },
  {
    name: 'state',
    label: `Company's state`,
    placeholder: 'CA',
    value: '',
  },
  {
    name: 'description',
    label: 'Write about your job just as you would in your resume',
    validators: [isRequired],
    value: `# Markdown Support
    Feel free to user _markdown_ here to really make your job description shine!`,
  },
]);

@observer
class JobForm extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.props.form.values);
  };

  render() {
    const {
      form: { fields },
    } = this.props;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>Fill out the form</h2>
        <InputGroup field={fields.companyName} type="text" />
        <InputGroup field={fields.position} type="text" />
        <InputGroup field={fields.isCurrentJob} type="checkbox" />
        <InputGroup field={fields.startDate} type="text" />
        <InputGroup field={fields.endDate} type="text" />
        <InputGroup field={fields.isRemoteJob} type="checkbox" />
        <InputGroup field={fields.city} type="text" />
        <SelectGroup field={fields.state} options={options} />
        <MarkdownGroup field={fields.description} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default JobForm;
