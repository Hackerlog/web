// @flow
import React, { Component } from 'react';
import noop from 'lodash-es/noop';
import ReactModal from 'react-modal';
import ReactGA from 'react-ga';
import LazyLoad from 'react-lazyload';

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
import headerImage from '../assets/img/header-image.svg';
import {
  TopBorder,
  HomeWrapper,
  Nav,
  Logo,
  Intro,
  TextWrapper,
  TheProblem,
  Feature,
  SectionTitleWhite,
  SignUp,
  Modal,
  H2,
  Strong,
  ShareButton,
  Closer,
  Footer,
} from '../modules/home/styles';
import { MailingListApi } from '../services/api';
import Logger from '../services/logger';

interface State {
  email: string;
  isLoading: boolean;
  showModal: boolean;
}

type SocialNetwork = 'Twitter' | 'Facebook' | 'LinkedIn';

export default class Home extends Component<{}, State> {
  state: State = {
    email: '',
    showModal: false,
    isLoading: true,
  };

  twitterPost =
    'http://twitter.com/home?status=Check%20out%20%40hackerlogapp!%20They%20are%20transforming%20how%20developers%20showcase%20their%20skills.%20https%3A%2F%2Fhackerlog.io';
  facebookPost = `https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2Fhackerlog.io&picture=http%3A%2F%2Fwww.insert-image-share-url-here.jpg&name=Hackerlog%20-%20A%20new%20way%20for%20developers%20to%20get%20noticed&caption=%20&description=Check%20out%20Hackerlog!%20They%20are%20transforming%20how%20developers%20showcase%20their%20skills.&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F`;
  linkedinPost = `https://www.linkedin.com/shareArticle?mini=true&url=https%3A//hackerlog.io&title=Hackerlog%20-%20A%20new%20way%20for%20developers%20to%20get%20noticed&text=Check%20out%20Hackerlog!%20They%20are%20transforming%20how%20developers%20showcase%20their%20skills.%20https%3A//hackerlog.io&source=`;

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.setState({ isLoading: true });

    ReactGA.event({
      category: 'Home',
      action: 'Signup',
    });

    Logger.setUserContext(this.state.email);

    const send = new MailingListApi();
    send
      .addUser(this.state.email)
      .then(() => {
        this.setState({ showModal: true, email: '', isLoading: false });
      })
      .catch(err => {
        this.setState({ showModal: true, email: '', isLoading: false });
        Logger.error('Adding email to mailing list failed: ', err);
      });
  };

  handleOnChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  };

  handleModalClose = (): void => {
    ReactGA.event({
      category: 'ShareModal',
      action: 'Did not share',
    });
    this.setState({ showModal: false });
  };

  handleShareClick = (network: SocialNetwork) => {
    ReactGA.event({
      category: 'ShareModal',
      action: 'Did share',
      value: network,
    });
  };

  render() {
    return (
      <HomeWrapper>
        <TopBorder />
        <Nav>
          <Logo src={logo} alt="Hackerlog" />
        </Nav>
        <Intro.Header>
          <Intro.Image src={headerImage} alt="Hackerlog!" />
          <TextWrapper>
            <Intro.H1>
              Introducing <Intro.Strong>Hackerlog</Intro.Strong>.
            </Intro.H1>
            <Intro.H1>
              A new way for developers like <Intro.Strong>you</Intro.Strong> to showcase your
              skills.
            </Intro.H1>
          </TextWrapper>
        </Intro.Header>
        <TheProblem.Section>
          <TextWrapper>
            <H2>The Problem</H2>
            <p>Right now, getting a job as a developer is a real pain in the you know what.</p>
            <p>
              You send out your resume, wait for a callback (pun intended), wait a little longer. If
              you’re lucky enough to get that call, you’ll probably have to answer some technical
              questions and if that goes well, then you will be given a take-home project that
              &#x22;should only take a couple of hours&#x22; (yeah, right!). All this just to prove
              you know what you are doing.
            </p>
            <p>
              Wouldn’t it be much easier if potential employers could see your work before they even
              talked to you?
            </p>
            <p>
              We think so. <Strong>Hackerlog</Strong> provides a platform where developers like you
              can display your true skills in an undeniable fashion. It makes getting noticed
              easier. It puts you in the running for the jobs you’re suited. And better still, it’s
              all <Strong>free</Strong>.
            </p>
          </TextWrapper>
        </TheProblem.Section>
        <LazyLoad once height="100%">
          <Feature.Section>
            <SectionTitleWhite>How Hackerlog solves this problem</SectionTitleWhite>
            <Feature.Grid>
              <Feature.Detail>
                <Feature.DetailLeft>
                  <LazyLoad once height="100%">
                    <img src={liveResults} alt="Live Stats" />
                  </LazyLoad>
                </Feature.DetailLeft>
                <Feature.DetailRight>
                  <h3>Real-time Stats</h3>
                  <p>
                    Prove your skills with live stats like daily coding activity with specific
                    languages.
                  </p>
                </Feature.DetailRight>
              </Feature.Detail>
              <Feature.Detail>
                <Feature.DetailLeft>
                  <LazyLoad once height="100%">
                    <img src={gitMetrics} alt="Git Metrics" />
                  </LazyLoad>
                </Feature.DetailLeft>
                <Feature.DetailRight>
                  <h3>Git Metrics</h3>
                  <p>
                    Hackerlog connects to your Git accounts so you can showcase those projects
                    you’re proud of, or even specific chunks of code that show you know how to solve
                    a particular problem.
                  </p>
                </Feature.DetailRight>
              </Feature.Detail>
              <Feature.Detail>
                <Feature.DetailLeft>
                  <LazyLoad once height="100%">
                    <img src={resume} alt="Resume" />
                  </LazyLoad>
                </Feature.DetailLeft>
                <Feature.DetailRight>
                  <h3>Resumé</h3>
                  <p>
                    Easily enter details of current and previous employers and show your
                    responsibilities and accomplishments. Or, simply import your LinkedIn data.
                  </p>
                </Feature.DetailRight>
              </Feature.Detail>
              <Feature.Detail>
                <Feature.DetailLeft>
                  <LazyLoad once height="100%">
                    <img src={experience} alt="Experience" />
                  </LazyLoad>
                </Feature.DetailLeft>
                <Feature.DetailRight>
                  <h3>Experience Timeline</h3>
                  <p>
                    Polish everything off with an elegant timeline that displays your software
                    engineering prowess, in an easy to read format that recruiters and technical
                    managers will love!
                  </p>
                </Feature.DetailRight>
              </Feature.Detail>
            </Feature.Grid>
          </Feature.Section>
        </LazyLoad>
        <LazyLoad once height="100%">
          <SignUp.Section>
            <SectionTitleWhite>
              Be among the first to know when Hackerlog launches!
            </SectionTitleWhite>
            <SignUp.Wrapper>
              Hackerlog is going to transform the way you attract employers. Sign up below and you
              will be the first to know when we launch. We may even contact you to be a beta tester.
              Oh, and don’t worry… we will never spam you or share your email address with anyone.
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
        </LazyLoad>
        <Footer>
          <p>
            <a href="https://twitter.com/hackerlogapp" target="_blank" rel="noopener noreferrer">
              @HackerlogApp
            </a>{' '}
            |{' '}
            <a href="mailto:info@hello.hackerlog.io" target="_blank" rel="noopener noreferrer">
              info@hello.hackerlog.io
            </a>
          </p>
        </Footer>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Share the news!"
          ariaHideApp={false}
          style={{
            overlay: {
              zIndex: '99',
            },
            content: {
              zIndex: '99',
            },
          }}
        >
          <Modal.Wrapper>
            <Modal.Top>
              <h1>You did it! Now, want to help others?</h1>
            </Modal.Top>
            <Modal.Bottom>
              <Modal.Left>
                <p>
                  We want everyone developer to know about Hackerlog and how it can help them. Would
                  you help us spread the word? A simple social share would help tremendously and we
                  would really appreciate it. What do you say?
                </p>
                <Modal.Actions>
                  <ShareButton
                    href={this.twitterPost}
                    target="_blank"
                    onClick={() => this.handleShareClick('Twitter')}
                  >
                    <img src={twitter} alt="Share on Twitter!" />
                  </ShareButton>
                  <ShareButton
                    href={this.facebookPost}
                    target="_blank"
                    onClick={() => this.handleShareClick('Facebook')}
                  >
                    <img src={facebook} alt="Share on Facebook!" />
                  </ShareButton>
                  <ShareButton
                    href={this.linkedinPost}
                    target="_blank"
                    onClick={() => this.handleShareClick('LinkedIn')}
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
