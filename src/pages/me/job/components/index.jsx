import React, { Component } from 'react';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import Markdown from 'react-markdown';
import { createConfirmation } from 'react-confirm';

import { Button, Confirm } from '../../../../modules/common/components/index';
import { ActionButtons } from '../../styles';
import Form from './form';
import { Body, Header, Location, Wrapper } from './styles';

const confirm = createConfirmation(Confirm);

export default class Job extends Component {
  state = {
    isOpen: false,
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  deleteJob = () => {
    confirm({
      title: 'Are you sure?',
      confirmation: 'This action cannot be reversed. Do you really want to do this?',
    }).then(
      ok => {
        console.log(ok);
      },
      cancel => {
        console.log(cancel);
      }
    );
  };

  editJob = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { companyName, position, date, city, state, description } = this.props.job;
    return (
      <Wrapper>
        <ActionButtons>
          <Button onClick={this.editJob} color="success" round title="Edit Job">
            <IoMdCreate size="18px" />
          </Button>
          <Button onClick={this.deleteJob} color="error" round title="Delete Job">
            <IoMdTrash size="18px" />
          </Button>
        </ActionButtons>
        <Header>
          <h2>{companyName}</h2>
          <h4>{position}</h4>
          <p>{date}</p>
        </Header>
        <Location>
          {city}, {state}
        </Location>
        <Body>
          <Markdown>{description}</Markdown>
        </Body>
        <Form isOpen={this.state.isOpen} job={this.props.job} onCloseModal={this.onCloseModal} />
      </Wrapper>
    );
  }
}
