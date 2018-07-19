import { observable, action } from 'mobx';

import RootStore from '../../RootStore';
import logger from '../../services/logger';
import { ILogin } from './types';

export default class LoginStore implements ILogin {
  public rootStore: RootStore;
  @observable public email: string = '';
  @observable public password: string = '';
  @observable public error: string | null = null;
  @observable public isLoading: boolean = false;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public handleEmailChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.email = event.currentTarget.value;
  };

  @action
  public handlePasswordChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.password = event.currentTarget.value;
  };

  @action
  public handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    this.isLoading = true;
    event.preventDefault();

    this.rootStore.authApi
      .authLoginPost({ body: JSON.stringify({ email: this.email, password: this.password }) })
      .then(res => {
        const { token, user } = res;
        if (user && token) {
          this.rootStore.userStore.create({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            token,
          });
          this.isLoading = false;
          this.rootStore.routing.push('/me');
        }
      })
      .catch(err => {
        this.isLoading = false;
        this.error = err.message;
        logger.error(err);
      });
  };
}
