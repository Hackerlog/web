import React from 'react';
import Modal from 'react-modal';
import { observer, inject } from 'mobx-react';

import CreateJobForm, { jobForm } from './form';

const CreateModal = ({ isOpen }) => (
  <Modal isOpen={isOpen}>
    <CreateJobForm form={jobForm} />
  </Modal>
);

export default inject('store')(observer(CreateModal));
