import React from 'react';
import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ children, ...otherProps }) => {
  return <CheckboxStyled {...otherProps}>{children}</CheckboxStyled>;
};

const CheckboxStyled = styled(AntdCheckbox)`
  & > :not(.ant-checkbox-checked) > .ant-checkbox-inner {
    background-color: ${(props) => props.theme.body.low};
  }
`;

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
