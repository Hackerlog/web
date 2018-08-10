import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    &.main {
      color: ${props => props.theme.primary};
      font-size: 120px;
      margin-right: 24px;
      position: relative;

      @media (max-width: ${props => props.theme.sizes.mobile}px) {
        font-size: 72px;
      }

      &:after {
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        right: -12px;
        background: ${props => props.theme.grey.light};
      }
    }

    &.text {
      font-size: 24px;
      font-weight: 300;

      @media (max-width: ${props => props.theme.sizes.mobile}px) {
        font-size: 16px;
      }
    }
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoHome = styled(Link)`
  color: ${props => props.theme.grey.default};
  text-decoration: none;
  margin-top: 72px;
`;

const FourOhFour = () => (
  <Wrapper>
    <Text>
      <h1 className="main">404</h1>
      <h1 className="text" data-testid="404">
        That page does not exists
      </h1>
    </Text>
    <GoHome to="/">Go home?</GoHome>
  </Wrapper>
);

export default FourOhFour;
