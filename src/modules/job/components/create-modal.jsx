import React from 'react';
import Modal from 'react-modal';
import { observer, inject } from 'mobx-react';
import CreateJobForm from './form';

const CreateModal = ({ isOpen }) => (
  <Modal isOpen={isOpen}>
    <CreateJobForm />
  </Modal>
);

export default inject('store')(observer(CreateModal));
