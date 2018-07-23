import { DebounceInput } from 'react-debounce-input';

import styled, { keyframes } from '../../theme';
import nope from '../../assets/img/nope.svg';
import yep from '../../assets/img/yep.svg';

const registerSlide = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

const usernameSlide = keyframes`
  0% {
    transform: translate(-50%, 500%);

  }
  100% {
    transform: translate(-50%, 0);
  }
`;

export const Background = styled.div`
  background: ${props => props.theme.gradients.login};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`;

export const Logo = styled.img`
  max-width: 320px;
  margin: 0;

  @media (max-width: ${props => props.theme.sizes.mobile}px) {
    max-width: 260px;
  }
`;

export const FormWrapper = styled.div`
  position: fixed;
  top: 184px;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 400px;
  width: 100%;
  padding: 12px;

  &.transition {
    animation: ${registerSlide} 0.7s ease-in-out;
    opacity: 0;
  }
`;

export const UsernameWrapper = styled.div`
  position: fixed;
  top: 184px;
  left: 50%;
  transform: translate(-50%, 500%);
  max-width: 400px;
  width: 100%;
  padding: 12px;
  color: ${props => props.theme.white};
  animation-fill-mode: forwards;
  opacity: 0;

  &.transition {
    animation: ${usernameSlide} 0.7s ease-in-out;
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

export const UsernameInputWrapper: any = styled.div`
  position: relative;
  margin-bottom: 26px;

  input {
    margin-bottom: 0;
  }

  &:after {
    content: '';
    position: absolute;
    height: 18px;
    width: 18px;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    background-image: url(${({ isValid, isDirty }: { isValid: boolean; isDirty: boolean }) =>
      !isDirty ? null : isValid ? yep : nope});
    background-repeat: no-repeat;
  }
`;

export const UsernameInput = styled(DebounceInput as any)`
  height: 48px;
  background: ${props => props.theme.white};
  border-radius: 48px;
  border: none;
  box-shadow: ${props => props.theme.shadows.small};
  width: 100%;
  padding: 0 24px;

  &:focus {
    outline: none;
  }
`;
