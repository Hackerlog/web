import React, { Component } from 'react';
import { observer } from 'mobx-react';

import CreateForm from '../form';
import { IsRequired, IsRequiredIf } from '../form/validators';
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
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'position',
    label: 'Job title?',
    placeholder: 'Software Engineer',
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'isCurrentJob',
    label: 'Current job?',
    placeholder: '',
    initialValue: false,
  },
  {
    name: 'startDate',
    label: 'Start date?',
    placeholder: 'July 2016',
    validators: [new IsRequired()],
    initialValue: '',
  },
  {
    name: 'endDate',
    label: 'End date?',
    placeholder: 'September 2018',
    validators: [new IsRequiredIf('isCurrentJob', false)],
    initialValue: '',
  },
  {
    name: 'isRemoteJob',
    label: 'Is this job remote?',
    initialValue: false,
    placeHolder: '',
  },
  {
    name: 'city',
    label: `Company's city?`,
    placeholder: 'Foster City',
    initialValue: '',
    validators: [new IsRequiredIf('isRemoteJob', false)],
  },
  {
    name: 'state',
    label: `Company's state`,
    placeholder: 'CA',
    initialValue: '',
    validators: [new IsRequiredIf('isRemoteJob', false)],
  },
  {
    name: 'description',
    label: 'Write about your job just as you would in your resume',
    validators: [new IsRequired()],
    initialValue: `# Markdown Support
    Feel free to user _markdown_ here to really make your job description shine!`,
  },
]);

@observer
class JobForm extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    if (!form.isValid) {
      form.showErrors();
    }
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
