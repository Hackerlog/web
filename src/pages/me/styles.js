import styled from 'styled-components';

import { c } from '../../modules/theme/index';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 260px auto;
  height: 100vh;
`;

export const Main = styled.div`
  padding: 18px;
`;

export const Sidebar = styled.aside`
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

export const SocialIconWrapper = styled.div`
  display: flex;

  img {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const ActionButtons = styled.div.attrs({
  className: 'hackerlog-action-buttons',
})`
  position: absolute;
  top: 50%;
  right: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transform: translateY(-50%);

  button {
    transform: translate(100px, 0);
    margin: 6px;
    transition: all ease-in-out 0.2s;

    &:hover {
      box-shadow: ${c('shadows.medium')};
      transition: all ease-in-out 0.2s;
    }
  }
`;
