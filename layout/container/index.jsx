import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Styled>{children}</Styled>;
};

const Styled = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  font-family: sans-serif;
`;

export default Container;
