/* eslint no-param-reassign: off */
import { types } from 'mobx-state-tree';

import { SESSION_KEY } from '../../utils/constants';

const User = types
  .model('UserModel', {
    id: types.identifierNumber,
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    token: types.string,
  })
  .views(self => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
  }));

const UserStore = types
  .model('UserModel', {
    user: types.maybe(types.reference(User)),
  })
  .views(() => ({
    get sessionKey() {
      return SESSION_KEY('user');
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
      } catch (_) {
        // do not throw here
      }
      return null;
    },

    clearStorage() {
      try {
        localStorage.removeItem(self.sessionKey);
      } catch (_) {
        // do nothing
      }
    },

    reset() {
      self.user = null;
      self.clearStorage();
    },
  }));

export default UserStore;
