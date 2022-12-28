import React from 'react';
import styled from 'styled-components';
import { Switch as AntdSwitch } from 'antd';

const Switch = ({ ...otherProps }) => {
  return <SwitchStyled {...otherProps} />;
};

const SwitchStyled = styled(AntdSwitch)`
  background-color: ${(props) => props.theme.body.low};

  & :focus {
    background-color: ${(props) => props.theme.body.low};
  }
`;

Switch.defaultProps = {
  checked: false,
};

export default Switch;
