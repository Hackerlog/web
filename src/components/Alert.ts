import styled from '../theme';

export const InfoAlert = styled.div`
  background: ${props => props.theme.info};
  color: ${props => props.theme.white};
  display: ${({ isActive }: { isActive: boolean }) => (isActive ? 'flex' : 'none')};
  align-items: center;
  padding: 18px;
  margin: 18px 0;
  width: 100%;
  font-size: 14px;
  box-shadow: ${props => props.theme.shadows.small};
`;

export const ErrorAlert = styled(InfoAlert)`
  background: ${props => props.theme.error};
`;

export const SuccessAlert = styled(InfoAlert)`
  background: ${props => props.theme.success};
`;
