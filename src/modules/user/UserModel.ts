import { observable, computed } from 'mobx';

import UserStore from './UserStore';
import { IUser } from './types';

export default class User {
  public id: number | undefined;
  public store: UserStore | null = null;

  @observable public firstName: string;
  @observable public lastName: string;
  @observable public email: string;
  @observable public token: string;

  public constructor(store: UserStore, { firstName, lastName, email, token, id }: IUser) {
    this.store = store;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.token = token;
  }

  @computed
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
