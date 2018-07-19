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
  max-width: 480px;
`;

export const Logo = styled.img`
  max-width: 480px;
`;

export const LoginButton = styled(PrimaryButton)`
  box-shadow: ${props => props.theme.shadows.medium};
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

export const CreateAccountLink = styled.a`
  font-weight: 600;
  color: ${props => props.theme.white};
  text-decoration: underline;
`;
