import { observable, action } from 'mobx';

class LoginStore {
  @observable
  email = '';

  @observable
  password = '';

  @observable
  error = '';

  @observable
  isLoading = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  handleInputChange = event => {
    this[event.currentTarget.name] = event.currentTarget.value;
  };

  @action
  handleLogin = async event => {
    event.preventDefault();
    this.isLoading = true;
    this.error = '';

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
      try {
        this.isLoading = false;
        const message = await e.json();
        this.error = message.error;
        this.rootStore.logger.error('Login failed', e);
      } catch (error) {
        this.isLoading = false;
        this.rootStore.logger.error('Login failed', error);
      }
    }
  };
}

export default LoginStore;
