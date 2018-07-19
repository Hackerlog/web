import { RouterStore } from 'mobx-react-router';

import UserStore from './modules/user/UserStore';

export default class RootStore {
  public routerStore: RouterStore;
  protected userStore: UserStore;

  constructor() {
    this.routerStore = new RouterStore();
    this.userStore = new UserStore(this);
  }
}
