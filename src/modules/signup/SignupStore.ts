import * as React from 'react';
import { types, getRoot, flow } from 'mobx-state-tree';
import { compact } from 'lodash';
import logger from '../../services/logger';
import { MainUser } from '../../services/api';
import { SESSION_KEY } from '../../utils/constants';

const ALLOWED_CHARS: RegExp = /^[0-9a-zA-Z]{2,30}$/g;

const SignupStore = types
  .model('SignupStore', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    isLoading: false,
    error: types.maybe(types.string),
    username: types.optional(types.string, ''),
    showUsername: false,
    usernameIsAvailable: false,
  })
  .views(self => ({
    get signupFormIsValid(): boolean {
      const fields: string[] = [self.firstName, self.lastName, self.email, self.password];
      return compact(fields).length === fields.length;
    },

    get usernameCharIsValid(): boolean {
      return self.username.match(ALLOWED_CHARS) !== null;
    },

    get usernameIsValid() {
      // @ts-ignore
      return self.usernameIsAvailable && self.username.length > 2 && self.usernameCharIsValid;
    },

    get root() {
      return getRoot(self);
    },

    get sessionKey(): string {
      return SESSION_KEY('signup');
    },
  }))
  .actions(self => {
    function updateUsernameIsAvailable(isAvailable: boolean): void {
      self.usernameIsAvailable = isAvailable;
    }

    const transitionToUsername = flow(function*(): IterableIterator<void> {
      self.isLoading = true;
      try {
        const { is_available: isAvailable } = yield self.root.userApi.usersEmailGet(self.email);
        if (!isAvailable) {
          self.error = 'That email is already in use. Need to login?';
        } else {
          self.error = '';
          self.showUsername = true;
        }
      } catch (err) {
        logger.error('Failed to lookup email address at registration: ', err);
      } finally {
        self.isLoading = false;
      }
    });

    const updateErrorMessage = (error: string): void => {
      self.error = error;
    };

    const handleInputChange = (event: React.SyntheticEvent): void => {
      const target = event.target as HTMLInputElement;
      const inputName = target.name;
      self[inputName] = target.value;
      if (inputName === 'username' && self.username.length > 2) {
        updateUsername();
      }
    };

    const updateUsername = () => {
      if (self.usernameCharIsValid) {
        logger.debug('Username is valid');
        self.error = '';
        lookupUsername();
      } else {
        logger.debug('Username is NOT valid');
        self.error = 'You can only use letters and numbers for your username.';
      }
    };

    const lookupUsername = flow(function*() {
      try {
        logger.debug('Looking up username');
        const res = yield self.root.userApi.usersUsernameGet(self.username);
        updateUsernameIsAvailable(res.is_available);
      } catch (e) {
        updateErrorMessage(e.message);
      }
    });

    const handleSignup = flow(function*(): IterableIterator<void> {
      self.isLoading = true;
      self.error = '';

      try {
        const res: MainUser = yield self.root.userApi.usersPost({
          body: JSON.stringify({
            email: self.email,
            first_name: self.firstName,
            last_name: self.lastName,
            password: self.password,
            username: self.username,
          }),
        });

        if (!!res.id) {
          handleLogin();
        }
      } catch (err) {
        self.error = err.message;
      } finally {
        self.isLoading = false;
      }
    });

    const handleLogin = flow(function*(): IterableIterator<void> {
      self.isLoading = true;

      try {
        const { token, user } = yield getRoot(self).authApi.authLoginPost({
          body: JSON.stringify({ email: self.email, password: self.password }),
        });

        if (user && token) {
          const userModel = {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            token,
          };

          getRoot(self).userStore.createUser(userModel);
          getRoot(self).userStore.storeUser(userModel);

          self.isLoading = false;

          getRoot(self).routing.push('/me');
        }
      } catch (e) {
        self.isLoading = false;
        self.error = e.message;

        logger.error('Login failed', e);

        throw new Error(e);
      }
    });

    return {
      handleInputChange,
      transitionToUsername,
      handleSignup,
    };
  });

export default SignupStore;
