import React from 'react';
import { observer, inject } from 'mobx-react';

import logo from '../../assets/img/logo-white.svg';
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
} from './styles';
import { ErrorAlert } from '../../modules/common/components';

const Index = ({ store }) => (
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
        <LoginButton color="primary" isLoading={store.isLoading} data-testid="login-submit-button">
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

Index.NOT_RELEASED = true;

export default inject(({ store }) => ({ store: store.loginStore }))(observer(Index));
