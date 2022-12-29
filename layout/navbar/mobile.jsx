import React from 'react';
import { NavLink } from 'react-router-dom';
import { rgba } from 'polished';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

import Portal from '@minology/components/portal';
import { routes } from '@route/routes';

const MobileDrawer = ({ onClose, isOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.getElementById('page-content').style.overflow = 'hidden';
    } else {
      document.getElementById('page-content').style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId="mobile-menu-wrapper">
      <Background />
      <Container open={isOpen}>
        <Header>
          <Close onClick={onClose} />
        </Header>
        <Menu>
          {routes.map((i, k) => (
            <MenuItem key={k} to={i.to} onClick={onClose}>
              {i.label}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </Portal>
  );
  `Menu ${i}`;
};

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;

  background-color: ${(props) => rgba(props.theme.body.low, 0.5)};
  backdrop-filter: blur(4px);
`;

const Container = styled.div`
  position: absolute;
  top: ${(props) => (props.open ? 0 : `-100vh`)};
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 8;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  flex-direction: row-reverse;
  height: 64px;
`;

const Menu = styled.ul`
  width: 100vw;
  padding: 2rem 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 100%;
  text-decoration: none;
  font-size: 1.25rem;

  &.active {
    background-color: ${(props) => rgba(props.theme.text.default, 0.25)};
    backdrop-filter: blur(2px);
  }
`;

const Close = styled(GrClose)`
  font-size: 2rem;
  font-weight: bolder;

  path {
    stroke: ${(props) => props.theme.text.default};
    stroke-width: 0.15rem;
  }
`;

export default MobileDrawer;
