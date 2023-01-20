import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import { Button as AntdButton, Badge } from 'antd';

const Button = ({ children, variant, badge, ...otherProps }) => {
  if (!badge) {
    return (
      <ButtonStyled variant={variant} {...otherProps}>
        {children}
      </ButtonStyled>
    );
  } else {
    return (
      <Badge count={badge}>
        <ButtonStyled variant={variant} {...otherProps}>
          {children}
        </ButtonStyled>
      </Badge>
    );
  }
};

Button.defaultProps = {
  variant: 'primary',
  badge: 0,
};

const ButtonStyled = styled(AntdButton)`
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.colors[props.variant]};
  border: none;
  border-radius: 0.3rem;

  & > span {
    color: ${(props) => props.theme.contrast};
  }

  &:hover {
    background-color: ${(props) =>
      darken(0.2, props.theme.colors[props.variant])};
  }
`;

export default Button;
