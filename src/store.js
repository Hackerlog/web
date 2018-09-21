import { configure, runInAction } from 'mobx';
import { RouterStore } from 'mobx-react-router';

import LoginStore from './pages/login/store';
import UserStore from './modules/user/store';
import SignupStore from './pages/signup/store';

configure({ enforceActions: true });

export default class RootStore {
  constructor({ logger, authApi, userApi }) {
    runInAction(() => {
      this.authApi = authApi;
      this.userApi = userApi;
      this.logger = logger;
      this.routing = new RouterStore();
      this.loginStore = new LoginStore(this);
      this.signupStore = new SignupStore(this);
      this.userStore = new UserStore(this);
    });
  }
}
