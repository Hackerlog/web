import { observable, action, computed } from 'mobx';
import compact from 'lodash/compact';

import { SESSION_KEY } from '../../utils/constants';

const ALLOWED_CHARS = /^[0-9a-zA-Z]{2,30}$/g;

class SignupStore {
  /* prettier-ignore */
  @observable firstName = '';
  /* prettier-ignore */
  @observable lastName = '';
  /* prettier-ignore */
  @observable email = '';
  /* prettier-ignore */
  @observable password = '';
  /* prettier-ignore */
  @observable isLoading = false;
  /* prettier-ignore */
  @observable error = '';
  /* prettier-ignore */
  @observable username = '';
  /* prettier-ignore */
  @observable showUsername = false;
  /* prettier-ignore */
  @observable usernameIsAvailable = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed
  get signupFormIsValid() {
    const fields = [this.firstName, this.lastName, this.email, this.password];
    return compact(fields).length === fields.length;
  }

  @computed
  get usernameCharIsValid() {
    return this.username.match(ALLOWED_CHARS) !== null;
  }

  @computed
  get usernameIsValid() {
    return this.usernameIsAvailable && this.username.length > 2 && this.usernameCharIsValid;
  }

  @computed
  get sessionKey() {
    return SESSION_KEY('signup');
  }

  @action
  transitionToUsername = async () => {
    this.isLoading = true;
    try {
      const { is_available: isAvailable } = await this.rootStore.userApi.isEmailAvailable(
        this.email
      );
      if (!isAvailable) {
        this.error = 'That email is already in use. Need to login?';
      } else {
        this.error = '';
        this.showUsername = true;
      }
    } catch (err) {
      this.rootStore.logger.error('Failed to lookup email address at registration: ', err);
    } finally {
      this.isLoading = false;
    }
  };

  @action
  lookupUsername = async () => {
    try {
      this.rootStore.logger.debug('Looking up username');
      const res = await this.rootStore.userApi.isUsernameAvailable(this.username);
      this.usernameIsAvailable = res.is_available;
    } catch (e) {
      this.error = e.message;
    }
  };

  @action
  updateUsername = () => {
    if (this.usernameCharIsValid) {
      this.rootStore.logger.debug('Username is valid');
      this.error = '';
      this.lookupUsername();
    } else {
      this.rootStore.logger.debug('Username is NOT valid');
      this.error = 'You can only use letters and numbers for your username.';
    }
  };

  @action
  handleInputChange = event => {
    const target = event.target;
    const inputName = target.name;
    this[inputName] = target.value;
    if (inputName === 'username' && this.username.length > 2) {
      this.updateUsername();
    }
  };

  @action
  handleLogin = async () => {
    this.isLoading = true;

    try {
      const { token, user } = await this.rootStore.authApi.authenticate({
        email: this.email,
        password: this.password,
      });

      if (user && token) {
        const userModel = {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          token,
        };

        this.rootStore.userStore.createUser(userModel);
        this.rootStore.userStore.storeUser(userModel);

        this.isLoading = false;

        this.rootStore.routing.push('/me');
      }
    } catch (e) {
      this.isLoading = false;
      this.error = e.message;

      this.rootStore.logger.error('Login failed', e);

      throw new Error(e);
    }
  };

  @action
  handleSignup = async () => {
    this.isLoading = true;
    this.error = '';

    try {
      const res = await this.rootStore.userApi.createUser({
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        password: this.password,
        username: this.username,
      });

      if (res.id) {
        this.handleLogin();
      }
    } catch (err) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  };
}

export default SignupStore;
