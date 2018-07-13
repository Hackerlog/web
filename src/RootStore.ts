import UserStore from './modules/user/UserStore';
import EntryStore from './modules/entry/EntryStore';

export default class RootStore {
  protected userStore: UserStore;
  protected entryStore: EntryStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.entryStore = new EntryStore(this);
  }
}
