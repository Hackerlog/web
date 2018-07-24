import styled from '../../theme';
import headerImage from '../../assets/img/header-image.svg';
import rocket from '../../assets/img/rocket.svg';

export const HomeWrapper = styled.main`
  background: ${props => props.theme.white};
`;

export const TopBorder = styled.div`
  height: 8px;
  background: ${props => props.theme.gradients.darkToPrimary};
`;

export const Nav = styled.nav`
  height: 80px;
  padding: 24px;
`;

export const Logo = styled.img`
  height: 56px;
  width: 230px;
`;

export const Intro = {
  Header: styled.header`
    padding: 36px 12px;
    background-image: url(${headerImage});
    background-repeat: no-repeat;
    background-position: 90% 100%;
    background-size: 100%;

    @media (min-width: ${props => props.theme.sizes.desktop}px) {
      padding: 24px 120px;
    }
  `,
  Blue: styled.span`
    color: ${props => props.theme.primary};
  `,
  Strong: styled.strong`
    font-weight: 700;
    color: ${props => props.theme.primary};
  `,
  H1: styled.h1`
    padding-right: 120px;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      padding-right: 0;
      text-align: center;
    }
  `,
};

export const TextWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  text-align: center;
  color: ${props => props.theme.grey.dark};
`;

export const Strong = styled.strong`
  color: ${props => props.theme.primary};
`;

export const Solution = {
  Section: styled.section`
    background: ${props => props.theme.grey.lightest};
    padding: 60px 12px;
    margin: 0 auto;
    position: relative;
  `,
};

export const Feature = {
  Section: styled.section`
    background: ${props => props.theme.gradients.darkToPrimary};
    padding-top: 84px;
    padding-bottom: 120px;
    margin: 0 auto;
    position: relative;

    svg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 48px;
      width: 100%;
      transform: rotate(180deg);
    }

    &:after {
      content: '';
      background: ${props => props.theme.secondary};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 15%;
      transform: skewY(-1.5deg);
      transform-origin: bottom right;
    }
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 18px;
    grid-template-areas: 'feature feature';
    align-items: center;
    justify-content: center;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      grid-template-columns: 95%;
      grid-template-areas: 'feature';
    }
  `,
  Detail: styled.div`
    grid-area: 'feature';
    display: flex;
  `,
  DetailLeft: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    img {
      width: 120px;
    }
  `,
  DetailRight: styled.div`
    display: flex;
    flex: 5;
    flex-direction: column;
    padding-left: 12px;

    h3 {
      color: ${props => props.theme.white};
      font-weight: 500;
    }

    p {
      color: ${props => props.theme.secondary};
    }
  `,
};

export const SectionTitleWhite = styled.h2`
  color: ${props => props.theme.white};
  text-align: center;
  margin-bottom: 36px;
  text-shadow: ${props => props.theme.shadows.medium};
`;

export const SignUp = {
  Section: styled.section`
    background: ${props => props.theme.secondary};
    padding: 48px 12px;
    position: relative;
    background-image: url(${rocket});
    background-repeat: no-repeat;
    background-position: left center;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      background-position: center center;
      background-size: 50%;
    }
  `,
  Wrapper: styled.div`
    max-width: 600px;
    margin: 24px auto;
  `,
};

export const Modal = {
  Wrapper: styled.div`
    max-width: 760px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: auto;
    position: relative;

    p {
      padding-right: 120px;

      @media (max-width: ${props => props.theme.sizes.tablet}px) {
        padding-right: 0;
      }
    }
  `,
  Image: styled.img`
    position: absolute;
    max-width: 300px;
    right: -100px;
    top: 60%;
    transform: translateY(-50%);
    z-index: 0;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      max-width: 120px;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  `,
  Actions: styled.div`
    display: flex;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      flex-direction: column;
    }

    button {
      margin: 12px;

      @media (max-width: ${props => props.theme.sizes.tablet}px) {
        margin: 0;
      }
    }

    a {
      margin: 12px 12px 12px 0;

      @media (max-width: ${props => props.theme.sizes.tablet}px) {
        margin-bottom: 12px;
      }
    }
  `,
  Top: styled.div`
    display: flex;
  `,
  Bottom: styled.div`
    display: flex;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      flex-direction: column;
    }
  `,
  Left: styled.div`
    display: flex;
    flex: 5;
    flex-direction: column;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      flex: 1;
    }
  `,
  Right: styled.div`
    display: flex;
    flex: 1;
  `,
};

export const TwitterButton = styled.a`
  background: #1fa0f3;
  border: 2px solid #1fa0f3;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.white};
  border-radius: 48px;
  padding: 0 60px;
  text-decoration: none;

  &:active,
  &:focus {
    outline: none;
  }

  img {
    height: 24px;
    margin: 0 12px 0 0;
    position: relative;
  }
`;
