// @flow
import React from 'react';
import { Icon } from 'antd';
import styled, { keyframes } from 'styled-components';

type ButtonTypes =
  | 'primary'
  | 'primary-outline'
  | 'default'
  | 'default-outline'
  | 'error'
  | 'error-outline'
  | 'success'
  | 'success-outline';

interface IButton {
  isLoading?: boolean;
  children?: any;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: ButtonTypes;
  outline?: boolean;
  round?: boolean;
  icon?: string;
  fluid?: boolean;
}

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

const StyledButton = styled.button`
  height: 48px;
  width: ${props => {
    switch (true) {
      case props.round:
        return '48px';
      case props.fluid:
        return '100%';
      default:
        return '200px';
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${props => (props.outline ? props.theme[props.type || 'default'] : props.theme.white)};
  background-color: ${props =>
    !props.outline ? props.theme[props.type || 'default'] : props.theme.white};
  border-radius: 48px;
  border: 2px solid
    ${props => (props.outline ? props.theme[props.type || 'default'] : 'transparent')};
  box-shadow: ${props => props.theme.shadows.small};
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

  i {
    font-size: 22px;
  }
`;

const renderChild = (children, round, icon, className) => {
  if (round) {
    return <Icon className={className} type={icon} />;
  }
  return children;
};

const Button: IButton = ({
  isLoading,
  children,
  onClick,
  className,
  disabled,
  type,
  outline,
  round,
  icon,
  fluid,
}) => (
  <StyledButton
    className={className}
    onClick={onClick}
    disabled={disabled || isLoading}
    type={type}
    outline={outline}
    round={round}
    icon={icon}
    fluid={fluid}
  >
    {isLoading ? <Loading /> : renderChild(children, round, icon, className)}
  </StyledButton>
);

export default Button;
