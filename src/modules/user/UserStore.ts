import { action, computed } from 'mobx';

import RootStore from '../../RootStore';
import User from './UserModel';
import { IUserUpdate, IUser } from './types';

export default class UserStore {
  public rootStore: RootStore;

  public user: User | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed
  public get isLoggedIn(): boolean {
    if (this.user) {
      return true;
    }
    const user = this.retrieveStoredUser();
    if (!user) {
      return false;
    }

    this.create(user);
    return true;
  }

  @action
  public create(user: IUser): void {
    this.user = new User(this, user);
    this.storeUser(user);
  }

  @action
  public update(attributes: IUserUpdate): void {
    // const attributesToUpdate = pickBy(attributes, identity);
    // Make the update now...
  }

  public storeUser(user: IUser): void {
    try {
      localStorage.setItem('@hackerlog.user', JSON.stringify(user));
    } catch (_) {
      // do not throw here
    }
  }

  public retrieveStoredUser(): IUser | null {
    try {
      const user = localStorage.getItem('@hackerlog.user');
      if (user) {
        return JSON.parse(user);
      }
    } catch (_) {
      // do not throw here
    }
    return null;
  }

  private clearStorage(): void {
    try {
      localStorage.clear();
    } catch (_) {
      // do nothing
    }
  }

  public reset(): void {
    this.user = null;
    this.clearStorage();
  }
}
