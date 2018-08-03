import * as React from 'react';

import styled from '../theme/';
import { PrimaryButton, RoundButton, SuccessButton, ErrorButton } from '../components/Button';

const Wrapper = styled.section`
  margin: 12px;
  border-bottom: 1px solid #ddd;
`;

const W = styled.div`
  margin: 12px auto;
`;

export default function() {
  return (
    <div>
      <Wrapper>
        <W>
          <PrimaryButton>Primary Button</PrimaryButton>
        </W>
        <W>
          <PrimaryButton isLoading={true}>Primary Button</PrimaryButton>
        </W>
        <W>
          <SuccessButton>Success Button</SuccessButton>
        </W>
        <W>
          <SuccessButton isLoading={true}>Success Button</SuccessButton>
        </W>
        <W>
          <ErrorButton>Error Button</ErrorButton>
        </W>
        <W>
          <ErrorButton isLoading={true}>Error Button</ErrorButton>
        </W>
      </Wrapper>
      <Wrapper>
        <W>
          <RoundButton icon="down" type="primary" />
          <RoundButton icon="down" type="primary" isLoading={true} />
        </W>
        <W>
          <RoundButton icon="down" type="primary-outline" />
          <RoundButton icon="down" type="primary-outline" isLoading={true} />
        </W>
        <W>
          <RoundButton icon="down" type="error" />
          <RoundButton icon="down" type="error" isLoading={true} />
        </W>
        <W>
          <RoundButton icon="down" type="success" />
          <RoundButton icon="down" type="success" isLoading={true} />
        </W>
        <W>
          <RoundButton icon="down" type="error-outline" />
          <RoundButton icon="down" type="error-outline" isLoading={true} />
        </W>
        <W>
          <RoundButton icon="down" type="success-outline" />
          <RoundButton icon="down" type="success-outline" isLoading={true} />
        </W>
      </Wrapper>
    </div>
  );
}
