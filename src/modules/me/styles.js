import styled from 'styled-components';

import { c } from '../../theme';

export const Wrapper = styled.main`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 260px auto;
  height: 100vh;
`;

export const Main = styled.div`
  grid-template: main;
  padding: 18px;
`;

export const Sidebar = styled.aside`
  grid-template: sidebar;
  background: ${c('gradients.login')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const Profile = styled.div`
  margin: 24px auto 6px auto;
`;

export const Name = styled.h2`
  color: ${c('grey.lightest')};
  margin-bottom: 6px;
`;

export const Title = styled.h4`
  color: ${c('grey.lightest')};
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: 16px;
`;

export const Email = styled.p`
  color: ${c('grey.lightest')};
  font-size: 14px;
  margin-bottom: 0;
  opacity: 0.8;
`;

export const Website = styled.p`
  color: ${c('grey.lightest')};
  font-size: 14px;
  opacity: 0.8;
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Keyword = styled.span`
  background: ${c('grey.lightest')};
  border-radius: 13px;
  font-size: 12px;
  color: ${c('primary')};
  text-align: center;
  padding: 0 6px;
  margin: 3px;
  min-width: 42px;
  box-shadow: ${c('shadows.small')};
`;
