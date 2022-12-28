import React from 'react';
import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

const Card = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

const CardStyled = styled(AntdCard)`
  background-color: ${(props) => props.theme.body.default};

  -webkit-box-shadow: 0px 0.25rem 0.5rem 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0.25rem 0.5rem 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0.25rem 0.5rem 0px rgba(0, 0, 0, 0.1);
`;

export default Card;
