import React from 'react';
import styled from 'styled-components';
import { Radio as AntdRadio } from 'antd';

const Radio = ({ children, ...otherProps }) => {
  return <RadioStyled {...otherProps}>{children}</RadioStyled>;
};

const RadioStyled = styled(AntdRadio)`
  & > :not(.ant-radio-checked) > .ant-radio-inner {
    background-color: ${(props) => props.theme.body.low};
  }
`;

Radio.Group = AntdRadio.Group;

export default Radio;
