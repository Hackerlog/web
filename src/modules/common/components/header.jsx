import React from 'react';
import styled from 'styled-components';

import logo from '../../../assets/img/logo.svg';

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.white};
`;

const Logo = styled.div`
  color: #555;
  text-align: left;
  padding: 2px;

  img {
    height: 56px;
    width: 230px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src={logo} alt="Hackerlog" />
    </Logo>
  </StyledHeader>
);

export default Header;
