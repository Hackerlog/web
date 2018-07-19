import styled, { keyframes } from '../theme';

import * as React from 'react';

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
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.white};
  border-radius: 48px;
  padding: 0 60px;
  border: 2px solid transparent;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

interface IButton {
  isLoading?: boolean;
  children: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ isLoading, children, onClick, className }: IButton) => (
  <StyledButton className={className} onClick={onClick} disabled={isLoading}>
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

export const DefaultOutlineButton = styled(DefaultButton)`
  background: ${props => props.theme.white};
  color: ${props => props.theme.grey.default};
`;
