import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => {
  return <Styled className="main">{children}</Styled>;
};

const Styled = styled.main`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100vh;
  max-height: 100vh;
  padding-top: 64px;
`;

export default Main;
