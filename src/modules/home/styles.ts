import styled from '../../theme';
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
    position: relative;
    padding: 36px 12px 0 12px;

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      padding: 24px 24px 60px 24px;
    }

    @media (max-width: ${props => props.theme.sizes.mobile}px) {
      padding: 24px;
    }
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
  Image: styled.img`
    position: absolute;
    bottom: -96px;
    max-width: 30%;
    width: 100%;
    right: 3%;
    z-index: 99;
  `,
};

export const TextWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 36px;
  font-weight: 700;
`;

export const Strong = styled.strong`
  color: ${props => props.theme.primary};
`;

export const TheProblem = {
  Section: styled.section`
    background-color: ${props => props.theme.grey.lightest};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23bfc6f1' fill-opacity='0.15' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
    padding: 60px 12px 96px;
    position: relative;
    margin-bottom: -60px;
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 100%);
  `,
};

export const Feature = {
  Section: styled.section`
    background: ${props => props.theme.gradients.darkToPrimary};
    padding-top: 84px;
    padding-bottom: 120px;
    margin: 0 auto -60px auto;
    position: relative;
    clip-path: polygon(0 3%, 100% 0, 100% 100%, 0% 100%);
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
    padding: calc(48px + 3%) 12px 48px 12px;
    position: relative;
    background-image: url(${rocket});
    background-repeat: no-repeat;
    background-position: -48px center;
    margin-top: -3%;
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 100%);

    @media (max-width: ${props => props.theme.sizes.tablet}px) {
      background-position: -48px bottom;
      background-size: 70%;
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

export const ShareButton = styled.a`
  &:active,
  &:focus {
    outline: none;
  }

  img {
    margin: 12px;
    position: relative;
  }
`;

export const Closer = styled.span`
  color: ${props => props.theme.grey.default};
  position: absolute;
  top: 12px;
  right: 24px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;
