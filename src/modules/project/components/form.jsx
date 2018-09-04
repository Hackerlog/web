import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Modal from 'react-modal';

import CreateForm from 'Modules/form';
import {
  InputGroup,
  DateGroup,
  MarkdownGroup,
  SelectGroup,
  CreatableGroup,
} from 'Modules/form/components';
import { Button } from 'Modules/common/components';
import languages from 'Utils/mocks/languages';
import formSchema from '../form-schema';

const languageOptions = languages.map(l => ({
  label: l,
  value: l,
}));

const options = [
  {
    label: 'Github',
    value: 'Github',
  },
  {
    label: 'Bitbucket',
    value: 'Bitbucket',
  },
  {
    label: 'Gitlab',
    value: 'Gitlab',
  },
];

@inject('store')
@observer
export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.createForm();
  }

  createForm() {
    const {
      name,
      source,
      createdOn,
      mainLanguage,
      description,
      numOfCommits,
      numOfContributors,
      numOfStars,
    } = this.props.project;
    this.form = new CreateForm(formSchema, {
      name,
      source,
      createdOn,
      mainLanguage,
      description,
      numOfCommits,
      numOfContributors,
      numOfStars,
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
          <InputGroup field={fields.name} />
          <SelectGroup field={fields.source} options={options} />
          <DateGroup field={fields.createdOn} />
          <CreatableGroup field={fields.mainLanguage} options={languageOptions} />
          <InputGroup field={fields.numOfCommits} type="number" />
          <InputGroup field={fields.numOfContributors} type="number" />
          <InputGroup field={fields.numOfStars} type="number" />
          <MarkdownGroup field={fields.description} />
          <Button color="primary">Submit</Button>
        </form>
      </Modal>
    );
  }
}
