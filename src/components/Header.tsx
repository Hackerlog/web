import * as React from 'react';

import styled from '../theme';
import logo from '../assets/img/logo.svg';

const StyledHeader = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`;

const Logo = styled.div`
  color: #555;
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src={logo} />
    </Logo>
  </StyledHeader>
);

export default Header;
