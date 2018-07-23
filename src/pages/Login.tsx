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
  WhiteLink,
  SmallText,
} from '../modules/login/styles';
import { ErrorAlert } from '../components/Alert';

const Login = ({ store }: { store: any }) => (
  <Background>
    <Wrapper>
      <Logo src={logo} alt="Login to Hackerlog!" />
      <form onSubmit={store.handleLogin}>
        <LoginInput
          type="email"
          name="email"
          placeholder="jon@appleseed.com"
          value={store.email}
          onChange={store.handleInputChange}
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="************"
          value={store.password}
          onChange={store.handleInputChange}
        />
        <LoginButton isLoading={store.isLoading}>Login</LoginButton>
      </form>
      <ErrorAlert isActive={!!store.error}>{store.error}</ErrorAlert>
      <SignupText>
        Not registered yet?{' '}
        <CreateAccountLink to="/signup">Create a free account!</CreateAccountLink>
        <SmallText>
          <WhiteLink to="/password-reset">Forget password?</WhiteLink>
        </SmallText>
      </SignupText>
    </Wrapper>
  </Background>
);

// @ts-ignore
Login.NOT_RELEASED = true;

export default inject(({ store }: { store: any }) => {
  return { store: store.loginStore };
})(observer(Login));
