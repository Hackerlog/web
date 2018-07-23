import { Link } from 'react-router-dom';

import styled from '../../theme';
import Input from '../../components/Input';
import { PrimaryButton } from '../../components/Button';

export const Background = styled.div`
  background: ${props => props.theme.gradients.login};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.main`
  position: relative;
  max-width: 400px;
  width: 100%;
  padding: 0 12px;
`;

export const Logo = styled.img`
  max-width: 320px;
  margin: 0 auto 60px auto;
  display: block;

  @media (max-width: ${props => props.theme.sizes.mobile}px) {
    max-width: 260px;
  }
`;

export const LoginButton = styled(PrimaryButton)`
  width: 100%;
  margin-bottom: 26px;
`;

export const LoginInput = styled(Input)`
  margin-bottom: 26px;
`;

export const SignupText = styled.p`
  color: ${props => props.theme.grey.lightest};
  text-align: center;
  font-size: 14px;
`;

export const CreateAccountLink = styled(Link)`
  font-weight: 600;
  color: ${props => props.theme.white};
  text-decoration: underline;
`;