import React from 'react';
import { observer, inject } from 'mobx-react';

import Job from '../modules/job';
import Project from '../modules/project';
import { user as data, job, project } from '../modules/me/mock-data';
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
} from '../modules/me/styles';
import If from '../components/If';
import ProfileImage from '../components/ProfileImage';

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
          <If
            condition={!!user.keywords}
            then={<Keywords>{this.renderKeywords(user.keywords)}</Keywords>}
          />
        </Sidebar>
        <Main>
          <Job job={job} />
          <Project project={project} />
        </Main>
      </Wrapper>
    );
  }
}

export default inject(({ store }) => ({ store: store.userStore }))(observer(Me));
