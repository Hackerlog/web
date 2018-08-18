import { observable, computed, action } from 'mobx';

import { SESSION_KEY } from '../../utils/constants';
import Job from '../job/store';
import Project from '../project/store';

class User {
  /* prettier-ignore */
  @observable firstName

  /* prettier-ignore */
  @observable lastName

  /* prettier-ignore */
  @observable email

  /* prettier-ignore */
  @observable token

  /* prettier-ignore */
  @observable title

  /* prettier-ignore */
  @observable website

  /* prettier-ignore */
  @observable twitterUrl

  /* prettier-ignore */
  @observable linkedInUrl

  /* prettier-ignore */
  @observable keywords

  /* prettier-ignore */
  @observable jobs = [];

  /* prettier-ignore */
  @observable projects = [];

  constructor(
    store,
    {
      id,
      firstName,
      lastName,
      email,
      token,
      title,
      website,
      twitterUrl,
      linkedInUrl,
      keywords,
      jobs,
      projects,
    }
  ) {
    this.store = store;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.token = token;
    this.title = title;
    this.website = website;
    this.twitterUrl = twitterUrl;
    this.linkedInUrl = linkedInUrl;
    this.keywords = keywords;
    this.createJobs(jobs);
    this.createProjects(projects);
  }

  @computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @computed
  get profileImage() {
    // FIXME: Needs a perm fix
    return `https://res.cloudinary.com/hhz4dqh1x/image/upload/v1533148995/profile/1.jpg`;
  }

  @computed
  get me() {
    // implement code here
  }

  @action
  createJobs = jobs => {
    if (jobs) {
      jobs.forEach(job => {
        this.jobs.push(new Job(this, job));
      });
    }
  };

  @action
  createProjects = projects => {
    if (projects) {
      projects.forEach(project => {
        this.projects.push(new Project(this, project));
      });
    }
  };
}

class UserStore {
  /* prettier-ignore */
  @observable user;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed
  get sessionKey() {
    return SESSION_KEY('user');
  }

  @computed
  get profileImage() {
    if (!this.user) {
      return `https://res.cloudinary.com/hhz4dqh1x/image/upload/v1533148995/profile/1.jpg`;
    }
    return this.user.profileImage;
  }

  @action
  isLoggedIn() {
    // FIXME: This is hard-coded...
    return true;
    // if (this.user) {
    //   return true;
    // }

    // const user = this.retrieveStoredUser();

    // if (!user) {
    //   return false;
    // }

    // this.createUser(user);

    // return true;
  }

  @action
  createUser = user => {
    this.user = new User(this, user);
  };

  @action
  reset = () => {
    this.user = null;
    this.clearStorage();
  };

  storeUser = user => {
    try {
      localStorage.setItem(this.sessionKey, JSON.stringify(user));
    } catch (_) {
      // do not throw here
    }
  };

  retrieveStoredUser = () => {
    try {
      const user = localStorage.getItem(this.sessionKey);
      if (user) {
        return JSON.parse(user);
      }
    } catch (e) {
      this.rootStore.logger.info('Could not retrieve stored user from localStorage', e);
    }
    return null;
  };

  clearStorage = () => {
    try {
      localStorage.removeItem(this.sessionKey);
    } catch (e) {
      this.rootStore.logger.info('Could not clear localStorage', e);
    }
  };
}

export default UserStore;
