import React from 'react';
import styled from 'styled-components';

import { Confirm } from '../../modules/common/components';

const Wrapper = styled.section`
  margin: 12px;
  border-bottom: 1px solid #ddd;
`;

export default function() {
  return (
    <div>
      <Wrapper>
        <Confirm />
      </Wrapper>
    </div>
  );
}
