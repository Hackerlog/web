import React from 'react';
import styled from 'styled-components';

import { c } from 'Theme';

export const Wrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 12px 84px 12px 12px;
  border-bottom: 1px solid ${c('grey.lightest')};
  margin-bottom: 24px;

  &:hover {
    .hackerlog-action-buttons button {
      transform: translate(0, 0);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  h2 {
    padding-right: 12px;
    margin-bottom: 9px;
  }

  h4 {
    color: ${c('tertiary')};
    text-transform: uppercase;
    padding-left: 12px;
    position: relative;
    margin-bottom: 9px;

    &:before {
      content: '';
      position: absolute;
      height: 48px;
      width: 1px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${c('grey.light')};
    }
  }

  p {
    margin-left: auto;
    font-size: 16px;
    color: ${c('grey.default')};
    margin-bottom: 9px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  column-gap: 12px;
`;

export const StyledStat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${c('grey.lightest')};
  padding: 12px;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: 103% 112%;
  box-shadow: ${c('shadows.medium')};
  text-align: center;

  p {
    font-weight: 600;
  }
`;

export const Stat = ({ stat, icon, title }) => (
  <StyledStat background={icon}>
    <p>{title}</p>
    <h2>{stat}</h2>
  </StyledStat>
);
