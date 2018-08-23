import React from 'react';
import noop from 'lodash/noop';
import get from 'lodash/get';
import styled from 'styled-components';

import { Background } from '../modules/signup/styles';
import { AuthApi } from '../services/api';
import { InputWithButton } from '../components/input';
import logger from '../services/logger';
import { Logo, WhiteLink, SmallText } from '../modules/login/styles';
import logo from '../assets/img/logo-white.svg';
import { SuccessAlert, ErrorAlert } from '../components/alert';

const Wrapper = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 24px 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: ${props => props.theme.white};
  }
`;

export default class PasswordReset extends React.Component {
  state = {
    email: '',
    isLoading: false,
    error: '',
    success: false,
  };

  get isValidEmail() {
    const f = get(this.state, 'email', '').split('@');
    const r = get(f, '[1]', '').split('.');
    return f.length === 2 && r.length > 1;
  }

  handleOnChange = e => {
    this.setState({ email: e.currentTarget.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true, error: '' });
    try {
      const api = new AuthApi();
      const res = await api.resetPost({ body: JSON.stringify({ email: this.state.email }) });
      if (res.success) {
        this.setState({
          email: '',
          success: true,
        });
      }
      this.setState({ isLoading: false });
    } catch (err) {
      this.setState({ error: err.message, isLoading: false });
      logger.error('Error calling password reset API: ', err);
    }
  };

  render() {
    return (
      <Background>
        <Wrapper>
          <Logo src={logo} alt="Reset your password." />
          <p>
            We all do it from time-to-time, so don't feel bad. Enter your email and we will send you
            a link to reset your password.
          </p>
          <form onSubmit={this.handleSubmit} data-testid="password-reset-form">
            <InputWithButton
              type="email"
              onChange={this.handleOnChange}
              placeholder="jon@hire-me.please"
              onClick={noop}
              value={this.state.email}
              inputTestId="password-reset-input-email"
              buttonTestId="password-reset-button-submit"
              isLoading={this.state.isLoading}
              disabled={!this.isValidEmail}
            >
              Reset Password
            </InputWithButton>
            <SmallText>
              <WhiteLink to="/login">Back to login?</WhiteLink>
            </SmallText>
          </form>
          <SuccessAlert isActive={this.state.success}>
            We sent you an email with a link to reset your password.
          </SuccessAlert>
          <ErrorAlert isActive={!!this.state.error}>{this.state.error}</ErrorAlert>
        </Wrapper>
      </Background>
    );
  }
}
