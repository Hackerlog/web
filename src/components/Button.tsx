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
  border: 2px solid ${props => props.theme.primary};

  &:active,
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${props => props.theme.primary};
`;
