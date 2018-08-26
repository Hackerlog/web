import React from 'react';
import styled from 'styled-components';

import Form, { jobForm } from 'Modules/job/components/form';
import { Confirm } from 'Modules/common/components';

const Wrapper = styled.section`
  margin: 12px;
  border-bottom: 1px solid #ddd;
`;

export default function() {
  return (
    <div>
      <Wrapper>
        <Form form={jobForm} />
        <Confirm />
      </Wrapper>
    </div>
  );
}
