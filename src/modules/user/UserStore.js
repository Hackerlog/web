// @flow
/* eslint no-param-reassign: off */
import { types } from 'mobx-state-tree';

import { SESSION_KEY } from '../../utils/constants';
import logger from '../../services/logger';

const User = types
  .model('UserModel', {
    id: types.identifierNumber,
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    token: types.string,
  })
  .views(self => ({
    get fullName(): string {
      return `${self.firstName} ${self.lastName}`;
    },
    get profileImage(): string {
      return `https://res.cloudinary.com/hhz4dqh1x/image/upload/v1533148995/profile/1.jpg`;
    },
  }));

const UserStore = types
  .model('UserModel', {
    user: types.maybe(types.reference(User)),
  })
  .views(self => ({
    get sessionKey(): string {
      return SESSION_KEY('user');
    },
    get profileImage(): string {
      if (!self.user) {
        return `https://res.cloudinary.com/hhz4dqh1x/image/upload/v1533148995/profile/1.jpg`;
      }
      return self.user.profileImage;
    },
  }))
  .actions(self => ({
    isLoggedIn() {
      if (self.user) {
        return true;
      }

      const user = self.retrieveStoredUser();

      if (!user) {
        return false;
      }

      self.createUser(user);

      return true;
    },

    createUser(user) {
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
  }));

export default UserStore;
