import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea: AntdTextArea } = Input;

const TextArea = ({ ...otherProps }) => {
  return <TextAreaStyled {...otherProps} />;
};

const TextAreaStyled = styled(AntdTextArea)`
  background-color: ${(props) => props.theme.body.low};
`;

export default TextArea;
