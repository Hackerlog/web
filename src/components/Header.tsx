import * as React from 'react';

import styled from '../theme';

const StyledHeader = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
`;

const Logo = styled.div`
  color: #555;
`;

const Header = () => (
  <StyledHeader>
    <Logo>Logo here</Logo>
  </StyledHeader>
);

export default Header;
