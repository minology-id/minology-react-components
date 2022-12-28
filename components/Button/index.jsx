import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

const Button = ({ children, ...otherProps }) => {
  return <ButtonStyled {...otherProps}>{children}</ButtonStyled>;
};

const ButtonStyled = styled(AntdButton)`
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 0.3rem;

  & > span {
    color: ${(props) => props.theme.contrast};
  }

  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
`;

export default Button;
