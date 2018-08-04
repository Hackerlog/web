import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

import Button from '../components/Button';

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
          <Button type="primary" fluid>
            Primary Button
          </Button>
        </W>
        <W>
          <Button type="primary" isLoading>
            Primary Button
          </Button>
        </W>
        <W>
          <Button type="error">error Button</Button>
        </W>
        <W>
          <Button type="error" isLoading>
            Primary Button
          </Button>
        </W>
        <W>
          <Button type="success">success Button</Button>
        </W>
        <W>
          <Button type="success" isLoading>
            Primary Button
          </Button>
        </W>

        <W>
          <Button outline type="primary">
            Primary Button
          </Button>
        </W>
        <W>
          <Button outline type="primary" isLoading>
            Primary Button
          </Button>
        </W>
        <W>
          <Button outline type="error">
            error Button
          </Button>
        </W>
        <W>
          <Button outline type="error" isLoading>
            Primary Button
          </Button>
        </W>
        <W>
          <Button outline type="success">
            success Button
          </Button>
        </W>
        <W>
          <Button outline type="success" isLoading>
            Primary Button
          </Button>
        </W>
      </Wrapper>
      <Wrapper>
        <W>
          <Button round type="primary">
            <Icon type="check" />
          </Button>
        </W>
        <W>
          <Button round icon="check" type="primary" isLoading />
        </W>
        <W>
          <Button round icon="check" type="error" />
        </W>
        <W>
          <Button round icon="check" type="error" isLoading />
        </W>
        <W>
          <Button round icon="check" type="success" />
        </W>
        <W>
          <Button round icon="check" type="success" isLoading />
        </W>
        <W>
          <Button outline round icon="check" type="primary" />
        </W>
        <W>
          <Button outline round icon="check" type="primary" isLoading />
        </W>
        <W>
          <Button outline round icon="check" type="error" />
        </W>
        <W>
          <Button outline round icon="check" type="error" isLoading />
        </W>
        <W>
          <Button outline round icon="check" type="success" />
        </W>
        <W>
          <Button outline round icon="check" type="success" isLoading />
        </W>
      </Wrapper>
    </div>
  );
}