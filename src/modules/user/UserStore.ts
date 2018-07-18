import RootStore from '../../RootStore';
import User from './UserModel';
import { IUserUpdate, IUserLogin, IUser } from './types';
import { action } from '../../../node_modules/mobx';
import { AuthApi } from '../../services/api';
import logger from '../../services/logger';

export default class UserStore {
  private rootStore: RootStore;

  public user: User | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public create({ firstName, lastName, email, token }: IUser): void {
    this.user = new User(this, { firstName, lastName, email, token });
  }

  @action
  public update(attributes: IUserUpdate): void {
    // const attributesToUpdate = pickBy(attributes, identity);
    // Make the update now...
  }

  @action
  public async login(email: string, password: string): Promise<IUserLogin> {
    if (!(email && password)) {
      return {
        success: false,
        error: 'You must supply a username and password.',
      };
    }
    try {
      const req = new AuthApi();
      const { token, user } = await req.usersLoginPost({ email, password });

      this.create({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        token: token || '',
      });

      return {
        success: true,
      };
    } catch (error) {
      logger.error('There was an error logging in: ', error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  public storeToken(token: string): void {
    try {
      localStorage.setItem('@hackerlog.token', token);
    } catch (_) {
      // do not throw here
    }
  }

  get root(): RootStore {
    return this.rootStore;
  }
}
