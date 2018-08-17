/* eslint no-param-reassign: off */
import { types, getRoot } from 'mobx-state-tree';

import { SESSION_KEY } from '../../utils/constants';
import logger from '../../services/logger';
import Job from '../job/store';
// import ProjectStore from '../project/store';

const User = types
  .model('UserModel', {
    id: types.identifierNumber,
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    token: types.string,
    title: types.string,
    website: types.maybe(types.string),
    twitterUrl: types.maybe(types.string),
    linkedInUrl: types.maybe(types.string),
    keywords: types.optional(types.array(types.string), []),
    jobs: types.optional(types.array(Job), []),
    // projects: types.optional(types.array(types.reference(ProjectStore)), []),
  })
  .views(self => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
    get profileImage() {
      // FIXME: Needs a perm fix
      return `https://res.cloudinary.com/hhz4dqh1x/image/upload/v1533148995/profile/1.jpg`;
    },
    get me() {
      // implement code here
    },
  }));

const UserStore = types
  .model('UserModel', {
    user: types.maybe(types.reference(User)),
  })
  .views(self => ({
    get sessionKey() {
      return SESSION_KEY('user');
    },
    get profileImage() {
      if (!self.user) {
        return `https://res.cloudinary.com/hhz4dqh1x/image/upload/v1533148995/profile/1.jpg`;
      }
      return self.user.profileImage;
    },
  }))
  .actions(self => ({
    isLoggedIn() {
      // FIXME: This is hard-coded...
      return true;
      // if (self.user) {
      //   return true;
      // }

      // const user = self.retrieveStoredUser();

      // if (!user) {
      //   return false;
      // }

      // self.createUser(user);

      // return true;
    },

    createUser(user) {
      if (user && user.jobs) {
        self.createMultipleJobs(user.jobs);
      }
      self.user = User.create(user);
    },

    storeUser(user) {
      try {
        localStorage.setItem(self.sessionKey, JSON.stringify(user));
      } catch (_) {
        // do not throw here
      }
    },

    retrieveStoredUser() {
      try {
        const user = localStorage.getItem(self.sessionKey);
        if (user) {
          return JSON.parse(user);
        }
      } catch (e) {
        logger.info('Could not retrieve stored user from localStorage', e);
      }
      return null;
    },

    clearStorage() {
      try {
        localStorage.removeItem(self.sessionKey);
      } catch (e) {
        logger.info('Could not clear localStorage', e);
      }
    },

    reset() {
      self.user = null;
      self.clearStorage();
    },

    createJob(job) {
      const newJob = new Job(job);
      self.user.jobs.push(newJob);
    },

    createMultipleJobs(jobs) {
      jobs.forEach(job => {
        self.createJob(job);
      });
    },
  }));

export default UserStore;
