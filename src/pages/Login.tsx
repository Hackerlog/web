import * as React from 'react';
import { observer, inject } from 'mobx-react';

import logo from '../assets/img/logo-white.svg';
import {
  Background,
  Wrapper,
  Logo,
  LoginInput,
  LoginButton,
  SignupText,
  CreateAccountLink,
} from '../modules/login/styles';
import { ErrorAlert } from '../components/Alert';
import { ILogin } from '../modules/login/types';
import RootStore from '../RootStore';

const Login = ({ store }: { store: ILogin }) => (
  <Background>
    <Wrapper>
      <Logo src={logo} alt="Login to Hackerlog!" />
      <form onSubmit={store.handleLogin}>
        <LoginInput
          type="email"
          name="email"
          placeholder="jon@appleseed.com"
          value={store.email}
          onChange={store.handleEmailChange}
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="************"
          value={store.password}
          onChange={store.handlePasswordChange}
        />
        <LoginButton isLoading={store.isLoading}>Login</LoginButton>
      </form>
      <ErrorAlert isActive={!!store.error}>{store.error}</ErrorAlert>
      <SignupText>
        Not registered yet?{' '}
        <CreateAccountLink href="/signup">Create a free account!</CreateAccountLink>
      </SignupText>
    </Wrapper>
  </Background>
);

export default inject(({ store }: { store: RootStore }) => ({
  store: store.loginStore,
}))(observer(Login));
