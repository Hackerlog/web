import { configure } from 'mobx';
import { RouterStore } from 'mobx-react-router';

import UserStore from './modules/user/UserStore';
import { AuthApi, UsersApi } from './services/api';
import LoginStore from './modules/login/LoginStore';

export default class RootStore {
  public authApi: AuthApi;
  public userApi: UsersApi;
  public routing: RouterStore;
  public userStore: UserStore;
  public loginStore: LoginStore;

  constructor(authApi: AuthApi, userApi: UsersApi) {
    configure({
      // Make sure we are using actions
      enforceActions: true,
    });

    this.authApi = authApi;
    this.userApi = userApi;
    this.routing = new RouterStore();
    this.userStore = new UserStore(this);
    this.loginStore = new LoginStore(this);
  }

  public destroyState(): void {
    this.userStore.reset();
    this.routing.replace('/login');
  }
}
