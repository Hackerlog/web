import React, { Component } from 'react';
import Markdown from 'react-markdown';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { createConfirmation } from 'react-confirm';

import { ActionButtons } from 'Modules/me/styles';
import { Button, Confirm } from 'Modules/common/components/index';
import star from 'Assets/img/star.png';
import commits from 'Assets/img/commits.png';
import contributors from 'Assets/img/contributors.png';
import language from 'Assets/img/language.png';
import { Body, Header, Stat, StatWrapper, Wrapper } from './styles';
import Form from './form';

const confirm = createConfirmation(Confirm);

export default class Project extends Component {
  state = {
    isOpen: false,
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  deleteProject = () => {
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

  editProject = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const {
      name,
      source,
      description,
      date,
      mainLanguage,
      numOfCommits,
      numOfContributors,
      numOfStars,
    } = this.props.project;
    return (
      <Wrapper>
        <ActionButtons>
          <Button onClick={this.editProject} color="success" round title="Edit Project">
            <IoMdCreate size="18px" />
          </Button>
          <Button onClick={this.deleteProject} color="error" round title="Delete Project">
            <IoMdTrash size="18px" />
          </Button>
        </ActionButtons>
        <Header>
          <h2>{name}</h2>
          <h4>{source}</h4>
          <p>{date}</p>
        </Header>
        <Body>
          <Markdown>{description}</Markdown>
          <StatWrapper>
            <Stat stat={numOfCommits} icon={commits} title="# of commits" />
            <Stat stat={numOfContributors} icon={contributors} title="# of contributors" />
            <Stat stat={mainLanguage} icon={language} title="Main language" />
            <Stat stat={numOfStars} icon={star} title="# of stars" />
          </StatWrapper>
        </Body>
        <Form
          isOpen={this.state.isOpen}
          project={this.props.project}
          onCloseModal={this.onCloseModal}
        />
      </Wrapper>
    );
  }
}
