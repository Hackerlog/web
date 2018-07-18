import styled from '../theme';

const Button = styled.button`
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
`;

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
