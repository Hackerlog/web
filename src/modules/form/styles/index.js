import styled from 'styled-components';

import { c } from '../../theme';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  position: relative;
`;

export const Input = styled.input`
  padding: 6px 12px;
  border: 1px solid ${c('grey.light')};
  border-radius: 2px;
  font-size: 15px;
  color: ${c('black')};

  &:focus {
    border: 1px solid ${c('grey.default')};
    box-shadow: none;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 400;
  color: ${c('grey.default')};
`;

export const Errors = styled.small`
  color: ${c('error')};
  margin-top: 3px;
`;

export const Select = styled.select``;
