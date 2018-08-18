import React from 'react';
import { observer, inject } from 'mobx-react';

import Job from '../modules/job';
import Project from '../modules/project';
import { user as data } from '../modules/me/mock-data';
import {
  Wrapper,
  Sidebar,
  Main,
  Profile,
  Name,
  Title,
  Email,
  Website,
  Keywords,
  Keyword,
  SocialIconWrapper,
} from '../modules/me/styles';
import If from '../components/If';
import ProfileImage from '../components/ProfileImage';
import twitterIcon from '../assets/img/twitter.svg';
import linkedinIcon from '../assets/img/linkedin.svg';

@inject(({ store }) => ({ store: store.userStore }))
@observer
class Me extends React.Component {
  static NOT_RELEASED = true;

  constructor(props) {
    super(props);
    props.store.createUser(data);
  }

  state = {};

  renderKeywords = keywords => keywords.map(k => <Keyword key={k}>{k}</Keyword>);

  render() {
    const { user } = this.props.store;
    console.log(user);
    return (
      <Wrapper>
        <Sidebar>
          <Profile>
            <ProfileImage id={user.id} />
          </Profile>
          <Name>{user.fullName}</Name>
          <If condition={!!user.title} then={<Title>{user.title}</Title>} />
          <If condition={!!user.email} then={<Email>{user.email}</Email>} />
          <If condition={!!user.website} then={<Website>{user.website}</Website>} />
          <SocialIconWrapper>
            <If
              condition={!!user.twitterUrl}
              then={
                <a href={user.twitterUrl} target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              }
            />
            <If
              condition={!!user.linkedInUrl}
              then={
                <a href={user.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              }
            />
          </SocialIconWrapper>
          <If
            condition={!!user.keywords}
            then={<Keywords>{this.renderKeywords(user.keywords)}</Keywords>}
          />
        </Sidebar>
        <Main>
          {user.jobs.map(job => (
            <Job job={job} key={job.id} />
          ))}
          {user.projects.map(project => (
            <Project project={project} key={project.id} />
          ))}
        </Main>
      </Wrapper>
    );
  }
}

export default Me;
