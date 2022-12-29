import React from 'react';
import styled from 'styled-components';

const Page = ({ children }) => {
  return <Styled id="page-content">{children}</Styled>;
};

const Styled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default Page;
