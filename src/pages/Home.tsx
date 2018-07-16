import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { noop } from 'lodash';

import logo from '../assets/img/logo.svg';
import liveResults from '../assets/img/live-results.svg';
import gitMetrics from '../assets/img/git-metrics.svg';
import resume from '../assets/img/resume.svg';
import experience from '../assets/img/experience.svg';
import { InputWithButton } from '../components/Input';
import {
  HomeWrapper,
  TopBorder,
  Nav,
  Logo,
  Intro,
  TextWrapper,
  Solution,
  Feature,
  SectionTitleWhite,
  SignUp,
} from '../modules/home/styles';
import { theme } from '../theme';

const initialState = {
  email: '',
};

type State = Readonly<typeof initialState>;

class Home extends React.Component {
  public state: State = initialState;

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // TODO: implement logic to add email to newsletter
  };

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  };

  public render() {
    return (
      <HomeWrapper>
        <TopBorder />
        <Nav>
          <Logo src={logo} />
        </Nav>
        <Intro.Header>
          <TextWrapper>
            <h1>
              As a developer, getting noticed is a circus of never ending take home projects and
              fibonacci fizz-buzz algorithms.
            </h1>
            <h1>
              We want to <Intro.Strong>change</Intro.Strong> that.
            </h1>
          </TextWrapper>
        </Intro.Header>
        <Solution.Section>
          <TextWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit neque, blandit imperdiet curae
              fames vitae netus potenti sed vel, pellentesque proin diam dui sociosqu torquent
              penatibus. Dis tempor massa justo tellus nostra mus, curabitur a scelerisque amet nec
              eu elit, duis libero placerat id aptent. Leo dictumst donec a mollis mattis maecenas
              dolor tempus nam natoque, nulla erat molestie velit sollicitudin sociosqu sodales dui.
              Duis porta adipiscing blandit rhoncus tempus dictum netus vulputate eleifend vehicula
              ligula platea vivamus diam, accumsan mi quisque sem et posuere sed convallis mollis
              metus praesent nulla condimentum.
            </p>
          </TextWrapper>
        </Solution.Section>
        <Feature.Section>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill={theme.grey.lightest} points="0,100 0,0 100,100" />
          </svg>
          <SectionTitleWhite>How do we solve this problem?</SectionTitleWhite>
          <Feature.Grid>
            <Feature.Detail>
              <Feature.DetailLeft>
                <img src={liveResults} alt="Live Results" />
              </Feature.DetailLeft>
              <Feature.DetailRight>
                <h3>Live Results</h3>
                <p>
                  Prove your skills with real metrics like daily coding activity with specific
                  languages.
                </p>
              </Feature.DetailRight>
            </Feature.Detail>
            <Feature.Detail>
              <Feature.DetailLeft>
                <img src={gitMetrics} alt="Git Metrics" />
              </Feature.DetailLeft>
              <Feature.DetailRight>
                <h3>Git Metrics</h3>
                <p>
                  Connect your git accounts and showcase projects, pull requests or even specific
                  blocks of code.
                </p>
              </Feature.DetailRight>
            </Feature.Detail>
            <Feature.Detail>
              <Feature.DetailLeft>
                <img src={resume} alt="Resume" />
              </Feature.DetailLeft>
              <Feature.DetailRight>
                <h3>Résumé</h3>
                <p>
                  Build your resume here by entering your current and past employers along with your
                  roles, responsibilities and accomplishments.
                </p>
              </Feature.DetailRight>
            </Feature.Detail>
            <Feature.Detail>
              <Feature.DetailLeft>
                <img src={experience} alt="Experience" />
              </Feature.DetailLeft>
              <Feature.DetailRight>
                <h3>Experience</h3>
                <p>
                  Enter all of this information in an easy to use builder and have it displayed
                  elegantly on an easy to read timeline.
                </p>
              </Feature.DetailRight>
            </Feature.Detail>
          </Feature.Grid>
        </Feature.Section>
        <SignUp.Section>
          <SectionTitleWhite>Interested?</SectionTitleWhite>
          <SignUp.Wrapper>
            Are you as excited about Hackerlog as we are? SIgn up below and you will be the first to
            know when we launch. We may even contact you to be a beta tester. Oh, and don’t worry…
            we will never share your email address with anyone.
          </SignUp.Wrapper>
          <SignUp.Wrapper>
            <form onSubmit={this.handleSubmit}>
              <InputWithButton
                type="email"
                onChange={this.handleOnChange}
                placeholder="jon@hire-me.please"
                onClick={noop}
                value={this.state.email}
              >
                Send
              </InputWithButton>
            </form>
          </SignUp.Wrapper>
        </SignUp.Section>
      </HomeWrapper>
    );
  }
}
export default inject('routing')(observer(Home));
