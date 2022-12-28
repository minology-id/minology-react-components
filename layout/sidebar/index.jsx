import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '@route/routes';

const Sidebar = () => {
  return (
    <Styled className="sidebar">
      {routes.map((i, k) => (
        <Link key={k} to={i.to}>
          <Icon>
            <i.icon />
          </Icon>
          {i.label}
        </Link>
      ))}
    </Styled>
  );
};

const Link = styled(NavLink)`
  display: flex;
  height: 48px;
  padding: 0 1rem;
  align-items: center;
  text-decoration: none;

  &.active {
    /* if it active */
  }

  :hover {
    /* if it focus or hover */
  }

  transition: all 0.25s ease-in;
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const Styled = styled.nav`
  display: none;

  @media screen and (min-width: 990px) {
    display: block;
    box-sizing: border-box;
    height: 100%;
    width: 325px;
    padding: 1rem 0;
  }
`;
export default Sidebar;
