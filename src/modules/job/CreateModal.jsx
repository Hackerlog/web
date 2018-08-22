import React from 'react';
import Modal from 'react-modal';
import { observer, inject } from 'mobx-react';
import CreateJobForm from './Form';

const CreateModal = ({ isOpen, job }) => (
  <Modal isOpen={isOpen}>
    <CreateJobForm />
  </Modal>
);

export default inject('store')(observer(CreateModal));