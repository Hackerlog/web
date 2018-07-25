import * as React from 'react';
import noop from 'lodash-es/noop';

import { Background } from '../modules/signup/styles';
import { AuthApi } from '../services/api';
import { InputWithButton } from '../components/Input';
import logger from '../services/logger';
import styled from '../theme';
import { Logo, SmallText, WhiteLink } from '../modules/login/styles';
import logo from '../assets/img/logo-white.svg';
import { SuccessAlert, ErrorAlert } from '../components/Alert';

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
    text-align: center;
  }
`;

const initialState = {
  password: '',
  isLoading: false,
  error: '',
  success: false,
};

type State = Readonly<typeof initialState>;

export default class ResetPassword extends React.Component<any, State> {
  public state: State = initialState;

  private get isValidPassword(): boolean {
    return this.state.password.length < 5;
  }

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ password: e.currentTarget.value });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    this.setState({ isLoading: true, error: '' });
    try {
      const api = new AuthApi();
      const res = await api.passwordPost({
        body: JSON.stringify({
          token: this.props.match.params.token,
          password: this.state.password,
        }),
      });
      if (res.success) {
        this.setState({
          password: '',
          success: true,
        });
      }
      this.setState({ isLoading: false });
      setTimeout(() => {
        this.props.history.push('/login');
      }, 3000);
    } catch (err) {
      const { error } = await err.json();
      this.setState({ error, isLoading: false });
      logger.error('Error calling password reset API: ', err);
    }
  };

  public render() {
    return (
      <Background>
        <Wrapper>
          <Logo src={logo} alt="Reset your password." />
          <p>Please enter your new password.</p>
          <form onSubmit={this.handleSubmit} data-testid="reset-password-form">
            <InputWithButton
              type="password"
              onChange={this.handleOnChange}
              placeholder="**************"
              onClick={noop}
              value={this.state.password}
              inputTestId="reset-password-input-email"
              buttonTestId="reset-password-button-submit"
              isLoading={this.state.isLoading}
              disabled={this.isValidPassword}
            >
              Reset Password
            </InputWithButton>
            <SmallText>
              <WhiteLink to="/login">Back to login?</WhiteLink>
            </SmallText>
          </form>
          <SuccessAlert isActive={this.state.success}>Your password has been updated.</SuccessAlert>
          <ErrorAlert isActive={!!this.state.error}>{this.state.error}</ErrorAlert>
        </Wrapper>
      </Background>
    );
  }
}
