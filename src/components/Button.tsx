import * as React from 'react';
import { Icon } from 'antd';

import styled, { keyframes } from '../theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg);
`;

const Loading = styled.div`
  border: 3px solid ${props => props.theme.grey.default};
  border-top: 3px solid ${props => props.theme.grey.lightest};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  animation: ${spin} 2s linear infinite;
  background: none;
`;

type ButtonTypes =
  | 'primary'
  | 'primary-outline'
  | 'default-outline'
  | 'default'
  | 'error'
  | 'error-outline'
  | 'success'
  | 'success-outline';

interface IStyledButton {
  round?: boolean;
  outline?: boolean;
  type?: ButtonTypes;
  theme?: any;
}

const StyledButton = styled.button`
  height: 48px;
  width: ${(props: IStyledButton) => (props.round ? '48px' : '200px')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${(props: IStyledButton) =>
    props.outline ? props.theme[props.type || 'default'] : props.theme.white};
  border-radius: 48px;
  border: 2px solid
    ${(props: IStyledButton) =>
      props.outline ? props.theme[props.type || 'default'] : 'transparent'};
  box-shadow: ${(props: IStyledButton) => props.theme.shadows.small};
  font-size: 15px;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

interface IButton extends IStyledButton {
  isLoading?: boolean;
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  outline?: boolean;
}

const Button = ({
  isLoading,
  children,
  onClick,
  className,
  disabled,
  type,
  outline,
  round,
}: IButton) => (
  <StyledButton
    className={className}
    onClick={onClick}
    disabled={disabled || isLoading}
    type={type}
    outline={outline}
    round={round}
  >
    {isLoading ? <Loading /> : children}
  </StyledButton>
);

export const PrimaryButton = styled(Button)`
  background: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
`;

export const DefaultButton = styled(Button)`
  background: ${props => props.theme.grey.default};
  border-color: ${props => props.theme.grey.default};
`;

export const SuccessButton = styled(Button)`
  background: ${props => props.theme.success};
  border: 2px solid ${props => props.theme.success};
`;

export const ErrorButton = styled(Button)`
  background: ${props => props.theme.error};
  border: 2px solid ${props => props.theme.error};
`;

export const DefaultOutlineButton = styled(DefaultButton)`
  background: ${props => props.theme.white};
  color: ${props => props.theme.grey.default};
`;

const StyledPrimaryRoundButton = styled(PrimaryButton)`
  width: 48px;
`;

const StyledOutlinePrimaryRoundButton = styled(DefaultOutlineButton)`
  width: 48px;
  color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
`;

const StyledOutlineDefaultRoundButton = styled(DefaultOutlineButton)`
  width: 48px;
`;

const StyledOutlineSuccessRoundButton = styled(StyledOutlinePrimaryRoundButton)`
  color: ${props => props.theme.success};
  border-color: ${props => props.theme.success};
`;

const StyledOutlineErrorRoundButton = styled(StyledOutlinePrimaryRoundButton)`
  color: ${props => props.theme.error};
  border-color: ${props => props.theme.error};
`;

interface IRoundButton extends IButton {
  type?: RoundButtonType;
  icon: string;
}

export const RoundButton = (props: IRoundButton) => {
  switch (props.type) {
    case 'primary':
      return (
        <StyledPrimaryRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledPrimaryRoundButton>
      );
    case 'primary-outline':
      return (
        <StyledOutlinePrimaryRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledOutlinePrimaryRoundButton>
      );
    case 'default-outline':
      return (
        <StyledOutlineDefaultRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledOutlineDefaultRoundButton>
      );
    case 'success':
      return (
        <StyledOutlineDefaultRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledOutlineDefaultRoundButton>
      );
    case 'success-outline':
      return (
        <StyledOutlineSuccessRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledOutlineSuccessRoundButton>
      );
    case 'error-outline':
      return (
        <StyledOutlineErrorRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledOutlineErrorRoundButton>
      );
    default:
      return (
        <StyledPrimaryRoundButton {...props}>
          <Icon type={props.icon} />
        </StyledPrimaryRoundButton>
      );
  }
};

const OutlineButton = styled();

const ButtonGenerator = props => {
  if (props.outline) {
    return <OutlineButton {...props} />;
  }
};
