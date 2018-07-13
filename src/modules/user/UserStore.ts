import RootStore from '../../RootStore';

export default class UserStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  get root(): RootStore {
    return this.rootStore;
  }
}
