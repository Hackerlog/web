import React from 'react';
import Modal from 'react-modal';
import { observer, inject } from 'mobx-react';

const CreateModal = ({ isOpen, job }) => (
  <Modal isOpen={isOpen}>
  
  </Modal>
);

export default inject('store')(observer(CreateModal));