import { configure } from 'mobx';
import { RouterStore } from 'mobx-react-router';

import LoginStore from './modules/login/store';
import UserStore from './modules/user/store';
import SignupStore from './modules/signup/store';

configure({ enforceActions: true });

export default class RootStore {
  constructor({ logger, authApi, userApi }) {
    this.authApi = authApi;
    this.userApi = userApi;
    this.logger = logger;
    this.routing = new RouterStore();
    this.loginStore = new LoginStore(this);
    this.signupStore = new SignupStore(this);
    this.userStore = new UserStore(this);
  }
}
