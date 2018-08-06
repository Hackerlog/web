// @flow
/* eslint no-param-reassign: off */
import { types, getRoot, flow } from 'mobx-state-tree';

import logger from '../../services/logger';

const LoginStore = types
  .model('LoginStore', {
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    error: types.optional(types.string, ''),
    isLoading: false,
  })
  .actions(self => ({
    handleInputChange(event) {
      self[event.currentTarget.name] = event.currentTarget.value;
    },

    handleLogin: flow(function* handleLogin(event: SyntheticEvent<HTMLFormElement>) {
      event.preventDefault();
      self.isLoading = true;
      self.error = '';

      try {
        const { token, user } = yield getRoot(self).authApi.authenticate({
          email: self.email,
          password: self.password,
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
        const message = yield e.json();
        self.error = message.error;
        logger.error('Login failed', e);
      }
    }),
  }));

export default LoginStore;
