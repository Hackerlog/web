import React from 'react';
import styled from 'styled-components';
import { Offline } from 'react-detect-offline';

import theme from '../../theme';

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: ${theme.error};
  color: ${theme.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const OfflineBanner = () => (
  <Offline>
    <Banner>[Offline] You need an internet connection to use this app.</Banner>
  </Offline>
);

export default OfflineBanner;
