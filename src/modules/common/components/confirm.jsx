import React from 'react';
import { confirmable } from 'react-confirm';
import styled from 'styled-components';
import { MdCheck, MdClose } from 'react-icons/md';

import { c } from '../../theme';
import Button from './button';

const Wrapper = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
`;

const Dialog = styled.div`
  max-width: 400px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${c('white')};
  display: flex;
  flex-direction: column;
  box-shadow: ${c('shadows.medium')};
`;

const Header = styled.h4`
  padding: 12px;
  margin-bottom: 0;
`;

const Body = styled.div`
  padding: 12px;
`;

const Footer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
`;

const Confirm = ({ title, show, proceed, cancel, confirmation }) => (
  <Wrapper isActive={show}>
    <Dialog>
      <Header>{title}</Header>
      <Body>{confirmation}</Body>
      <Footer>
        <Button
          color="default"
          onClick={() => cancel('arguments will be passed to the callback')}
          outline
          round
        >
          <MdClose size="18px" />
        </Button>
        <Button
          color="success"
          icon="check"
          onClick={() => proceed('arguments will be passed to the callback')}
          outline
          round
        >
          <MdCheck size="18px" />
        </Button>
      </Footer>
    </Dialog>
  </Wrapper>
);

export default confirmable(Confirm);
