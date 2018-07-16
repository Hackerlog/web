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
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-position: 90% 100%;
  background-size: 100%;

  @media (min-width: ${props => props.theme.sizes.desktop}px) {
    padding: 60px 120px;
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

  &:after {
    background: inherit;
    bottom: 0;
    content: '';
    display: block;
    height: 72px;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-3.5deg);
    transform-origin: 100%;
    z-index: 0;
  }
`;

export const FeatureSection = styled.section`
  background: ${props => props.theme.gradients.darkToPrimary};
  padding-top: 84px;
  margin: 0 auto;
`;

export const FeatureDetailGrid = styled.div`
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
`;

export const FeatureSectionTitle = styled.h2`
  color: ${props => props.theme.white};
  text-align: center;
  margin-bottom: 60px;
`;

export const FeatureDetail = styled.div`
  grid-area: 'feature';
  display: flex;
`;

export const FeatureDetailLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
  }
`;

export const FeatureDetailRight = styled.div`
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
`;
