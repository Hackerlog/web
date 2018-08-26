import React from 'react';
import { observer, inject } from 'mobx-react';

import { LoginInput, LoginButton, SignupText, CreateAccountLink } from 'Modules/login/styles';
import { ErrorAlert } from 'Modules/common/components';
import logo from 'Assets/img/logo-white.svg';
import {
  FormWrapper,
  UsernameWrapper,
  Logo,
  LogoWrapper,
  Background,
  UsernameInputWrapper,
  UsernameInput,
} from 'Modules/signup/styles';

const usernameMessage = (isAvailable, isValid) => {
  if (!isAvailable) {
    return 'Username not available';
  }

  if (isValid) {
    return 'Finish';
  }

  return 'Choose a username';
};

const Signup = ({ store }) => (
  <Background>
    <LogoWrapper>
      <Logo src={logo} alt="Login to Hackerlog!" />
    </LogoWrapper>
    <FormWrapper className={store.showUsername ? 'transition' : ''}>
      <LoginInput
        type="text"
        name="firstName"
        placeholder="First Name"
        value={store.firstName}
        onChange={store.handleInputChange}
      />
      <LoginInput
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={store.lastName}
        onChange={store.handleInputChange}
      />
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
      <LoginButton
        type="primary"
        isLoading={store.isLoading}
        onClick={store.transitionToUsername}
        disabled={!store.signupFormIsValid}
      >
        Sign up!
      </LoginButton>
      <ErrorAlert isActive={!!store.error}>{store.error}</ErrorAlert>
      <SignupText>
        Already a user? <CreateAccountLink to="/login">Log in here!</CreateAccountLink>
      </SignupText>
    </FormWrapper>
    <UsernameWrapper className={store.showUsername ? 'transition' : ''}>
      <p>
        Please choose your personal URL. This will be an easy way for people to find you. Your
        personal URL will be:{' '}
      </p>
      <p>
        hackerlog.io/
        {store.username}
      </p>
      <UsernameInputWrapper isDirty={store.username.length > 2} isValid={store.usernameIsValid}>
        <UsernameInput
          type="text"
          name="username"
          placeholder="genius-coder"
          value={store.username}
          onChange={store.handleInputChange}
          minLength={2}
          debounceTimeout={500}
        />
      </UsernameInputWrapper>
      <LoginButton
        isLoading={store.isLoading}
        onClick={store.handleSignup}
        disabled={!store.usernameIsValid}
      >
        {usernameMessage(store.usernameIsAvailable, store.usernameIsValid)}
      </LoginButton>
      <ErrorAlert isActive={!!store.error}>{store.error}</ErrorAlert>
    </UsernameWrapper>
  </Background>
);

export default inject(({ store }) => ({
  store: store.signupStore,
}))(observer(Signup));
