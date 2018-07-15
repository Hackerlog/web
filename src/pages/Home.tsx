import {
  HomeWrapper,
  TopBorder,
  Nav,
  Logo,
  Intro,
  TextWrapper,
  Strong,
  SolutionSection,
} from '../modules/home/styles';

import * as React from 'react';
import { inject, observer } from 'mobx-react';

import logo from '../assets/img/logo.svg';

const Home = () => (
  <HomeWrapper>
    <TopBorder />
    <Nav>
      <Logo src={logo} />
    </Nav>
    <Intro>
      <TextWrapper>
        <h1>
          As a developer, getting noticed is a circus of never ending take home projects and
          fibonacci fizz-buzz algorithms.
        </h1>
        <h1>
          We want to <Strong>change</Strong> that.
        </h1>
      </TextWrapper>
    </Intro>
    <SolutionSection>
      <TextWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit neque, blandit imperdiet curae
          fames vitae netus potenti sed vel, pellentesque proin diam dui sociosqu torquent
          penatibus. Dis tempor massa justo tellus nostra mus, curabitur a scelerisque amet nec eu
          elit, duis libero placerat id aptent. Leo dictumst donec a mollis mattis maecenas dolor
          tempus nam natoque, nulla erat molestie velit sollicitudin sociosqu sodales dui. Duis
          porta adipiscing blandit rhoncus tempus dictum netus vulputate eleifend vehicula ligula
          platea vivamus diam, accumsan mi quisque sem et posuere sed convallis mollis metus
          praesent nulla condimentum.
        </p>
      </TextWrapper>
    </SolutionSection>
  </HomeWrapper>
);

export default inject('routing')(observer(Home));
