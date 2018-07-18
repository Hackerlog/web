import { observable, computed, reaction, IReactionDisposer } from 'mobx';

import UserStore from './UserStore';
import { IUser } from './types';

export default class User {
  public id = null;
  public store: UserStore | null = null;

  @observable public firstName: string;
  @observable public lastName: string;
  @observable public email: string;
  @observable public token: string;

  private saveHandler: IReactionDisposer | null = null;

  public constructor(store: UserStore, { firstName, lastName, email, token }: IUser) {
    this.store = store;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.token = token;

    this.saveHandler = reaction(
      () => this.token,
      (jwtToken: string): void => {
        if (this.store) {
          this.store.storeToken(jwtToken);
        }
      }
    );
  }

  @computed public fullName = () => `${this.firstName} ${this.lastName}`;

  public dispose(): void {
    if (this.saveHandler) {
      this.saveHandler();
    }
  }
}
