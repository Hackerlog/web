import { types } from 'mobx-state-tree';
import { IUser } from './types';

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
  }));

const UserStore: any = types
  .model('UserModel', {
    user: types.maybe(types.reference(User)),
  })
  .actions((self: typeof UserStore.Type) => ({
    isLoggedIn(): boolean {
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

    createUser(user: IUser): void {
      self.user = User.create(user);
    },

    storeUser(user: IUser): void {
      try {
        localStorage.setItem('@hackerlog.user', JSON.stringify(user));
      } catch (_) {
        // do not throw here
      }
    },

    retrieveStoredUser(): IUser | null {
      try {
        const user = localStorage.getItem('@hackerlog.user');
        if (user) {
          return JSON.parse(user);
        }
      } catch (_) {
        // do not throw here
      }
      return null;
    },

    clearStorage(): void {
      try {
        localStorage.clear();
      } catch (_) {
        // do nothing
      }
    },

    reset(): void {
      self.user = null;
      self.clearStorage();
    },
  }));

export default UserStore;
