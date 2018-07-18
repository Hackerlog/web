import * as React from 'react';

import styled from '../theme';
import { PrimaryButton } from './Button';

const Input = styled.input`
  height: 48px;
  background: ${props => props.theme.white};
  border-radius: 48px;
  border: none;
  box-shadow: ${props => props.theme.shadows.large};
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

type InputType = 'email' | 'text' | 'number';
interface IProps {
  children: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  type: InputType;
  inputTestId: string;
  buttonTestId: string;
}

export const InputWithButton = ({
  children,
  placeholder,
  onChange,
  onClick,
  value,
  type,
  inputTestId,
  buttonTestId,
}: IProps) => (
  <InputGroup>
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      data-testid={inputTestId}
    />
    <PrimaryButton onClick={onClick} data-testid={buttonTestId}>
      {children}
    </PrimaryButton>
  </InputGroup>
);
