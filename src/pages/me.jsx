import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Job from 'Modules/job/components';
import Project from 'Modules/project/components';
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
} from 'Modules/me/styles';
import { If, ProfileImage } from 'Modules/common/components';
import twitterIcon from 'Assets/img/twitter.svg';
import linkedinIcon from 'Assets/img/linkedin.svg';
import mock, { job, project } from 'Utils/mocks';

@inject(({ store }) => ({ store: store.userStore }))
@observer
export default class Me extends Component {
  static NOT_RELEASED = true;

  constructor(props) {
    super(props);
    props.store.createUser(mock('user', { jobs: job(4), projects: project(6) }));
  }

  renderKeywords = keywords => keywords.map(k => <Keyword key={k}>{k}</Keyword>);

  render() {
    const { user } = this.props.store;
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
          {user.jobs.map(j => (
            <Job job={j} key={j.id} />
          ))}
          {user.projects.map(p => (
            <Project project={p} key={p.id} />
          ))}
        </Main>
      </Wrapper>
    );
  }
}
