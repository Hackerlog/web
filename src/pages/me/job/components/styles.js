import styled from 'styled-components';

import { c } from '../../../../modules/theme/index';

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
`;

export const Location = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
`;
