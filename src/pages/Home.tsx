import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { noop } from 'lodash';
import * as ReactModal from 'react-modal';
import * as ReactGA from 'react-ga';

import logo from '../assets/img/logo.svg';
import liveResults from '../assets/img/live-results.svg';
import gitMetrics from '../assets/img/git-metrics.svg';
import resume from '../assets/img/resume.svg';
import experience from '../assets/img/experience.svg';
import modalImage from '../assets/img/modal-image.svg';
import twitter from '../assets/img/twitter.png';
import facebook from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';
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
  Modal,
  H2,
  Strong,
  ShareButton,
  Closer,
} from '../modules/home/styles';
import { theme } from '../theme';
import { MailingListApi } from '../services/api';
import Logger from '../services/logger';

const initialState = {
  email: '',
  showModal: false,
};

type State = Readonly<typeof initialState>;

export class Home extends React.Component {
  public state: State = initialState;

  private twitterPost =
    'http://twitter.com/home?status=Check%20out%20%40hackerlogapp!%20They%20are%20transforming%20how%20developers%20showcase%20their%20skills.%20https%3A%2F%2Fhackerlog.io';
  private facebookPost = `https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2Fhackerlog.io&picture=http%3A%2F%2Fwww.insert-image-share-url-here.jpg&name=Hackerlog%20-%20A%20new%20way%20for%20developers%20to%20get%20noticed&caption=%20&description=Check%20out%20Hackerlog!%20They%20are%20transforming%20how%20developers%20showcase%20their%20skills.&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F`;
  private linkedinPost = `https://www.linkedin.com/shareArticle?mini=true&url=https%3A//hackerlog.io&title=Hackerlog%20-%20A%20new%20way%20for%20developers%20to%20get%20noticed&text=Check%20out%20Hackerlog!%20They%20are%20transforming%20how%20developers%20showcase%20their%20skills.%20https%3A//hackerlog.io&source=`;

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    ReactGA.event({
      category: 'Home',
      action: 'Signup',
    });

    const send = new MailingListApi();
    send
      .listPost({
        body: JSON.stringify({ email: this.state.email }),
      })
      .then(() => {
        this.setState({ showModal: true, email: '' });
      })
      .catch(err => {
        this.setState({ showModal: true, email: '' });
        Logger.error('Adding email to mailing list failed: ', err);
      });
  };

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  };

  private handleModalClose = (): void => {
    ReactGA.event({
      category: 'ShareModal',
      action: 'Did not share',
    });
    this.setState({ showModal: false });
  };

  private handleShareClick = () => {
    ReactGA.event({
      category: 'ShareModal',
      action: 'Did share',
    });
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
            <Intro.H1>
              Introducing <Intro.Blue>Hackerlog</Intro.Blue>.
            </Intro.H1>
            <Intro.H1>
              A new way for developers like <Intro.Strong>you</Intro.Strong> to find work.
            </Intro.H1>
          </TextWrapper>
        </Intro.Header>
        <Solution.Section>
          <TextWrapper>
            <H2>The Problem</H2>
            <p>Right now, getting a job as a developer is a real pain in the pixels.</p>
            <p>
              You send out your resume, wait for a callback (pun intended), wait a little longer. If
              you’re lucky enough to get that call, you’ll probably have to answer some technical
              questions, then solve some kind of algorithm problem “that will only take a couple of
              minutes” (yeah, right!), or maybe even build a small application. Then there’s the
              video call, and the face-to-face interview. All this just to prove you know what you
              are doing.
            </p>
            <p>
              Wouldn’t it be so much easier if you could <Strong>SHOW</Strong> employers that you{' '}
              <Strong>KNOW</Strong> what you’re doing?
            </p>
            <p>
              Hackerlog will do exactly that, allowing employers to see the work you’re currently
              doing and have done, plus where you’ve worked, so they can easily see that your skills
              match their needs.
            </p>
            <p>
              It makes getting noticed <Strong>easier</Strong>.
            </p>
            <p>
              It puts <Strong>you</Strong> in the running for the jobs you’re suited.
            </p>
            <p>
              And better still, it’s all <Strong>free</Strong>.
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
                <img src={liveResults} alt="Live Stats" />
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
                  Hackerlog connects with your Git accounts so you can showcase those projects
                  you’re proud of, or even specific chunks of code.
                </p>
              </Feature.DetailRight>
            </Feature.Detail>
            <Feature.Detail>
              <Feature.DetailLeft>
                <img src={resume} alt="Resume" />
              </Feature.DetailLeft>
              <Feature.DetailRight>
                <h3>Resumé</h3>
                <p>
                  Easily enter details of current and previous employers and show your
                  responsibilities and accomplishments.
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
                  Polish everything off with an elegant timeline that shows how you’ve grown as a
                  developer, in an easy to read format that recruiters and technical managers will
                  love!
                </p>
              </Feature.DetailRight>
            </Feature.Detail>
          </Feature.Grid>
        </Feature.Section>
        <SignUp.Section>
          <SectionTitleWhite>Be among the first to know when Hackerlog launches!</SectionTitleWhite>
          <SignUp.Wrapper>
            Are you as excited about Hackerlog as we are? SIgn up below and you will be the first to
            know when we launch. We may even contact you to be a beta tester. Oh, and don’t worry…
            we will never share your email address with anyone.
          </SignUp.Wrapper>
          <SignUp.Wrapper>
            <form onSubmit={this.handleSubmit} data-testid="home-form-newsletter">
              <InputWithButton
                type="email"
                onChange={this.handleOnChange}
                placeholder="jon@hire-me.please"
                onClick={noop}
                value={this.state.email}
                inputTestId="home-input-email"
                buttonTestId="home-button-submit"
              >
                Send
              </InputWithButton>
            </form>
          </SignUp.Wrapper>
        </SignUp.Section>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Share the news!"
          ariaHideApp={false}
        >
          <Modal.Wrapper>
            <Modal.Top>
              <h1>You did it! Now, want to help others?</h1>
            </Modal.Top>
            <Modal.Bottom>
              <Modal.Left>
                <p>
                  We truly think Hackerlog is going to transform the way developers display their
                  talent and we want everyone to know about it. Would you help us spread the word? A
                  simple tweet would help tremendously and we would really appreciate it. What do
                  you say?
                </p>
                <Modal.Actions>
                  <ShareButton
                    href={this.twitterPost}
                    target="_blank"
                    onClick={this.handleShareClick}
                  >
                    <img src={twitter} alt="Share on Twitter!" />
                  </ShareButton>
                  <ShareButton
                    href={this.facebookPost}
                    target="_blank"
                    onClick={this.handleShareClick}
                  >
                    <img src={facebook} alt="Share on Facebook!" />
                  </ShareButton>
                  <ShareButton
                    href={this.linkedinPost}
                    target="_blank"
                    onClick={this.handleShareClick}
                  >
                    <img src={linkedin} alt="Share on LinkedIn!" />
                  </ShareButton>
                </Modal.Actions>
              </Modal.Left>
              <Modal.Right>
                <Modal.Image src={modalImage} alt="Help us out!" />
              </Modal.Right>
            </Modal.Bottom>
          </Modal.Wrapper>
          <Closer onClick={this.handleModalClose}>x</Closer>
        </ReactModal>
      </HomeWrapper>
    );
  }
}

export default inject('store')(observer(Home));
