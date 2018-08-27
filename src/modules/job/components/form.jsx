import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Modal from 'react-modal';

import CreateForm from 'Modules/form';
import { IsRequired, IsRequiredIf } from 'Modules/form/validators';
import {
  InputGroup,
  DateGroup,
  MarkdownGroup,
  SelectGroup,
  CheckboxGroup,
} from 'Modules/form/components';
import { states } from 'Utils/constants';
import { Button } from 'Modules/common/components';

const options = states.map(state => ({
  value: state,
  label: state,
}));

@inject('store')
@observer
class JobForm extends Component {
  constructor(props) {
    super(props);
    this.createForm();
  }

  createForm() {
    const { companyName, position, date, city, state, description } = this.props.job;
    this.form = new CreateForm(
      [
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
          validators: [new IsRequired()],
          initialValue: '02/17',
        },
        {
          name: 'endDate',
          label: 'End date?',
          validators: [new IsRequiredIf('isCurrentJob', false)],
          initialValue: '05/18',
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
          label: 'Write about your job just as you would in your resume (use Markdown)',
          validators: [new IsRequired()],
          initialValue: null,
        },
      ],
      { companyName, position, date, city, state, description }
    );
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { form } = this;
    if (!form.isValid) {
      form.showErrors();
    }
  };

  render() {
    const { isOpen } = this.props;
    const { fields } = this.form;

    return (
      <Modal isOpen={isOpen}>
        <form onSubmit={this.handleOnSubmit}>
          <h2>Fill out the form</h2>
          <InputGroup field={fields.companyName} type="text" />
          <InputGroup field={fields.position} type="text" />
          <CheckboxGroup field={fields.isCurrentJob} />
          <DateGroup field={fields.startDate} type="text" />
          <DateGroup field={fields.endDate} type="text" />
          <CheckboxGroup field={fields.isRemoteJob} />
          <InputGroup field={fields.city} type="text" />
          <SelectGroup field={fields.state} options={options} />
          <MarkdownGroup field={fields.description} />
          <Button type="primary">Submit</Button>
        </form>
      </Modal>
    );
  }
}
export default JobForm;
