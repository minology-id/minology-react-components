import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0;
`;

export default ({ children }) => {
  return <Title>{children}</Title>;
};
