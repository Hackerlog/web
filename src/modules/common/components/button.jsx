import React from 'react';
import styled, { keyframes } from 'styled-components';

import { c } from '../../theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }  
  100% { transform: rotate(360deg);
`;

export const Loading = styled.div.attrs({
  'data-testid': 'loading-indicator',
})`
  border: 3px solid ${c('grey.default')};
  border-top: 3px solid ${c('grey.lightest')};
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
  color: ${props => (props.outline ? c(props.color, 'default') : c('white'))};
  background-color: ${props => (!props.outline ? c(props.color, 'default') : c('white'))};
  border-radius: 48px;
  border: 1px solid ${props => (props.outline ? c(props.color, 'white') : 'transparent')};
  box-shadow: ${c('shadows.small')};
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

const Button = ({
  isLoading,
  children,
  onClick,
  className,
  disabled,
  type,
  color,
  outline,
  round,
  fluid,
}) => (
  <StyledButton
    className={className}
    onClick={onClick}
    disabled={disabled || isLoading}
    type={type}
    color={color}
    outline={outline}
    round={round}
    fluid={fluid}
  >
    {isLoading ? <Loading /> : children}
  </StyledButton>
);

export default Button;
