import React from 'react';
import { observer, inject } from 'mobx-react';

import logo from 'Assets/img/logo-white.svg';
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
} from 'Modules/login/styles';
import { ErrorAlert } from 'Modules/common/components';

const Login = ({ store }) => (
  <Background>
    <Wrapper>
      <Logo src={logo} alt="Login to Hackerlog!" />
      <form onSubmit={store.handleLogin} data-testid="login-form">
        <LoginInput
          type="email"
          name="email"
          placeholder="jon@appleseed.com"
          value={store.email}
          data-testid="login-email-input"
          onChange={store.handleInputChange}
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="************"
          value={store.password}
          data-testid="login-password-input"
          onChange={store.handleInputChange}
        />
        <LoginButton type="primary" isLoading={store.isLoading} data-testid="login-submit-button">
          Login
        </LoginButton>
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

Login.NOT_RELEASED = true;

export default inject(({ store }) => ({ store: store.loginStore }))(observer(Login));
