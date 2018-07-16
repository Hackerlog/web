import {
  HomeWrapper,
  TopBorder,
  Nav,
  Logo,
  Intro,
  TextWrapper,
  Strong,
  SolutionSection,
  FeatureSection,
  FeatureSectionTitle,
  FeatureDetailGrid,
  FeatureDetail,
  FeatureDetailLeft,
  FeatureDetailRight,
} from '../modules/home/styles';

import * as React from 'react';
import { inject, observer } from 'mobx-react';

import logo from '../assets/img/logo.svg';
import liveResults from '../assets/img/live-results.svg';

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
    <FeatureSection>
      <FeatureSectionTitle>How do we solve this problem?</FeatureSectionTitle>
      <FeatureDetailGrid>
        <FeatureDetail>
          <FeatureDetailLeft>
            <img src={liveResults} alt="Live Results" />
          </FeatureDetailLeft>
          <FeatureDetailRight>
            <h3>Live Results</h3>
            <p>
              Prove your skills with real metrics like daily coding activity with specific
              languages.
            </p>
          </FeatureDetailRight>
        </FeatureDetail>
        <FeatureDetail>
          <FeatureDetailLeft>
            <img src={liveResults} alt="Live Results" />
          </FeatureDetailLeft>
          <FeatureDetailRight>
            <h3>Live Results</h3>
            <p>
              Prove your skills with real metrics like daily coding activity with specific
              languages.
            </p>
          </FeatureDetailRight>
        </FeatureDetail>
        <FeatureDetail>
          <FeatureDetailLeft>
            <img src={liveResults} alt="Live Results" />
          </FeatureDetailLeft>
          <FeatureDetailRight>
            <h3>Live Results</h3>
            <p>
              Prove your skills with real metrics like daily coding activity with specific
              languages.
            </p>
          </FeatureDetailRight>
        </FeatureDetail>
        <FeatureDetail>
          <FeatureDetailLeft>
            <img src={liveResults} alt="Live Results" />
          </FeatureDetailLeft>
          <FeatureDetailRight>
            <h3>Live Results</h3>
            <p>
              Prove your skills with real metrics like daily coding activity with specific
              languages.
            </p>
          </FeatureDetailRight>
        </FeatureDetail>
      </FeatureDetailGrid>
    </FeatureSection>
  </HomeWrapper>
);

export default inject('routing')(observer(Home));
