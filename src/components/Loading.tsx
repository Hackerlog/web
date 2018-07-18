import * as React from 'react';

import styled, { keyframes } from '../theme';

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  border-radius: 50%;
  color: #4651af;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background: ${props => props.theme.white};
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: ${loadingAnimation} 2s infinite ease 1.5s;
  }

  &:after {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background: #fbfffc;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: ${loadingAnimation} 2s infinite ease;
  }
`;

interface ILoadingProps {
  error: boolean;
  timedOut: boolean;
  pastDelay: boolean;
}

const Loading = ({ error, timedOut, pastDelay }: ILoadingProps) => {
  switch (true) {
    case error:
    case timedOut:
      return null;
    case pastDelay:
      return <StyledLoader />;
    default:
      return null;
  }
};

export default Loading;
