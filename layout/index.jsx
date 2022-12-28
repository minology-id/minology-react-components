import React from 'react';

import Container from './container';
import Navbar from './navbar';
import Main from './main';
import Sidebar from './sidebar';
import Content from './content';
import Page from './page';
import Footer from './footer';

import routes from './sidebar/routes';

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar routes={routes} />
        <Content>
          <Page>{children}</Page>
          <Footer>Footer</Footer>
        </Content>
      </Main>
    </Container>
  );
};

export default Layout;
