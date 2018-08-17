import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

import { c } from '../../theme';
import star from '../../assets/img/star.png';
import commits from '../../assets/img/commits.png';
import contributors from '../../assets/img/contributors.png';
import language from '../../assets/img/language.png';

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
  flex-direction: column;
`;

const StatWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  column-gap: 12px;
`;

const StyledStat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${c('grey.lightest')};
  padding: 12px;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: 103% 112%;
  box-shadow: ${c('shadows.medium')};
  text-align: center;

  p {
    font-weight: 600;
  }
`;

const Stat = ({ stat, icon, title }) => (
  <StyledStat background={icon}>
    <p>{title}</p>
    <h2>{stat}</h2>
  </StyledStat>
);

class Project extends Component {
  renderDate(startDate, endDate, isCurrentJob) {
    if (isCurrentJob) {
      return `${startDate} - Present`;
    }

    return `${startDate} - ${endDate}`;
  }

  render() {
    const {
      name,
      source,
      description,
      createdOn,
      mainLanguage,
      numOfCommits,
      numOfContributors,
      numOfStars,
    } = this.props.project;
    return (
      <Wrapper>
        <Header>
          <h2>{name}</h2>
          <h4>{source}</h4>
          <p>{createdOn}</p>
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
      </Wrapper>
    );
  }
}

export default Project;