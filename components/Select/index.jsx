import React from 'react';
import styled from 'styled-components';
import { Select as AntdSelect } from 'antd';

const Select = (props) => {
  return <SelectStyled {...props} />;
};

const SelectStyled = styled(AntdSelect)`
  & > .ant-select-selector {
    background-color: ${(props) => props.theme.body.low} !important;
  }
  .ant-select-selection-placeholder {
    color: ${(props) => props.theme.text.default};
    opacity: 0.5;
  }
`;

export default Select;
