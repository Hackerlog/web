import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { c } from '../../theme';

const Wrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 12px;
  border-bottom: 1px solid ${c('grey.lightest')};
  margin-bottom: 24px;
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
  renderDate(startDate, endDate, isCurrentJob) {
    if (isCurrentJob) {
      return `${startDate} - Present`;
    }

    return `${startDate} - ${endDate}`;
  }

  render() {
    const {
      companyName,
      position,
      startDate,
      endDate,
      isCurrentJob,
      city,
      state,
      description,
    } = this.props.job;
    return (
      <Wrapper>
        <Header>
          <h2>{companyName}</h2>
          <h4>{position}</h4>
          <p>{this.renderDate(startDate, endDate, isCurrentJob)}</p>
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
