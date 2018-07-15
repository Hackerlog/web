import styled from '../../theme';
import headerImage from '../../assets/img/header-image.svg';

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

export const Intro = styled.header`
  padding: 60px 12px;
  height: calc(100vh - 88px);
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-position: 90% 70%;
  background-size: calc(413px * 0.7) calc(320px * 0.7);
  margin-bottom: 24px;

  @media (min-width: ${props => props.theme.sizes.desktop}px) {
    padding: 60px 120px;
    background-size: 413px 320px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const Strong = styled.strong`
  font-weight: 700;
  color: ${props => props.theme.primary};
`;

export const SolutionSection = styled.section`
  background: ${props => props.theme.grey.lightest};
  padding: 60px 0;
  margin: 0 auto;
  position: relative;

  &:before {
    background: inherit;
    top: 0;
    content: '';
    display: block;
    height: 60px;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(3.5deg);
    transform-origin: 100%;
    z-index: 0;
  }

  &:after {
    background: inherit;
    bottom: 0;
    content: '';
    display: block;
    height: 60px;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-3.5deg);
    transform-origin: 100%;
    z-index: 0;
  }
`;
