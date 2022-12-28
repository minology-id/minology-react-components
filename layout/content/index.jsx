import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => {
  return <Styled className="content">{children}</Styled>;
};

const Styled = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Content;
