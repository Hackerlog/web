import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { IoMdTrash, IoMdCreate } from 'react-icons/io';

import { ActionButtons } from '../me/styles';
import Button from '../../components/Button';
import { c } from '../../theme';

const Wrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 12px 84px 12px 12px;
  border-bottom: 1px solid ${c('grey.lightest')};
  margin-bottom: 24px;

  &:hover {
    .hackerlog-action-buttons {
      transform: translate(0, -50%);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  h2 {
    padding-right: 12px;
    margin-bottom: 9px;
  }

  h4 {
    color: ${c('tertiary')};
    text-transform: uppercase;
    padding-left: 12px;
    position: relative;
    margin-bottom: 9px;

    &:before {
      content: '';
      position: absolute;
      height: 48px;
      width: 1px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${c('grey.light')};
    }
  }

  p {
    margin-left: auto;
    font-size: 16px;
    color: ${c('grey.default')};
    margin-bottom: 9px;
  }
`;

const Body = styled.div`
  display: flex;
`;

const Location = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
`;

class Job extends Component {
  state = {
    showActions: false,
  };

  showActions = () => {
    this.setState({ showActions: true });
  };

  hideActions = () => {
    this.setState({ showActions: false });
  };

  editJob = () => {
    // TODO - @deric: this...
  };

  deleteJob = () => {};

  render() {
    const { companyName, position, date, city, state, description } = this.props.job;
    return (
      <Wrapper>
        <ActionButtons>
          <Button onClick={this.editJob} type="success" icon="edit" round title="Edit Job">
            <IoMdCreate size="18px" />
          </Button>
          <Button onClick={this.deleteJob} type="error" icon="delete" round title="Delete Job">
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
      </Wrapper>
    );
  }
}

export default Job;
