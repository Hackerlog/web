import React from 'react';
import styled from 'styled-components';

import Button from './button';

const Input = styled.input`
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

export default Input;

const InputGroup = styled.div`
  height: 48px;
  position: relative;

  button {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const InputWithButton = ({
  children,
  placeholder,
  onChange,
  onClick,
  value,
  type,
  inputTestId,
  buttonTestId,
  isLoading = false,
  disabled = false,
}) => (
  <InputGroup>
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      data-testid={inputTestId}
    />
    <Button
      type="primary"
      onClick={onClick}
      data-testid={buttonTestId}
      isLoading={isLoading}
      disabled={disabled}
    >
      {children}
    </Button>
  </InputGroup>
);
