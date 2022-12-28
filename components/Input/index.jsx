import React from 'react';
import styled from 'styled-components';
import { Input as AntdInput } from 'antd';

const Input = ({ ...otherProps }) => {
  return <InputStyled {...otherProps} />;
};

const InputStyled = styled(AntdInput)`
  background-color: ${(props) => props.theme.body.low};

  ::placeholder {
    color: ${(props) => props.theme.text.default};
    opacity: 0.5;
  }
`;

export default Input;
