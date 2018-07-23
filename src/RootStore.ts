import { types, getEnv } from 'mobx-state-tree';
import { RouterModel, syncHistoryWithStore } from 'mst-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { AuthApi, UsersApi } from './services/api';
import LoginStore from './modules/login/LoginStore';
import UserStore from './modules/user/UserStore';
import SignupStore from './modules/signup/SignupStore';

export const routerModel = RouterModel.create();
export const history = syncHistoryWithStore(createBrowserHistory(), routerModel);

const RootModel = types
  .model('Root', {
    routing: types.optional(RouterModel, routerModel),
    loginStore: types.optional(LoginStore, {}),
    userStore: types.optional(UserStore, {}),
    signupStore: types.optional(SignupStore, {}),
  })
  .views(self => ({
    get userApi(): UsersApi {
      return getEnv(self).userApi;
    },
    get authApi(): AuthApi {
      return getEnv(self).authApi;
    },
  }));

const RootStore = RootModel.create(
  {
    routing: routerModel,
    loginStore: {},
    userStore: {},
    signupStore: {},
  },
  {
    userApi: new UsersApi(),
    authApi: new AuthApi(),
  }
);

export default RootStore;
