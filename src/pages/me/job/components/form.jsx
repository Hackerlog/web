import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Modal from 'react-modal';

import CreateForm from '../../../../modules/form/index';
import {
  InputGroup,
  DateGroup,
  MarkdownGroup,
  SelectGroup,
  CheckboxGroup,
} from '../../../../modules/form/components/index';
import { states } from '../../../../utils/constants';
import { Button } from '../../../../modules/common/components/index';
import formSchema from '../form-schema';

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
    const {
      companyName,
      position,
      city,
      state,
      description,
      startDate,
      endDate,
      isCurrentJob,
      isRemoteJob,
    } = this.props.job;
    this.form = new CreateForm(formSchema, {
      companyName,
      position,
      startDate,
      endDate,
      isCurrentJob,
      isRemoteJob,
      city,
      state,
      description,
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { form } = this;
    if (!form.isValid) {
      form.showErrors();
    }
  };

  render() {
    const { isOpen, onCloseModal } = this.props;
    const { fields } = this.form;

    return (
      <Modal isOpen={isOpen} onRequestClose={onCloseModal}>
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
          <Button color="primary">Submit</Button>
        </form>
      </Modal>
    );
  }
}
export default JobForm;
