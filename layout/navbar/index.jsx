import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';

import DarkModeContext from '@minology/context/darkMode.context';
import logo from '@assets/vitejs-logo.svg';
import noProfile from '@assets/no-profile.png';

const Navbar = () => {
  const { darkToggler } = React.useContext(DarkModeContext);
  return (
    <Styled className="navbar">
      <Image src={logo} alt="vitejs logo" />
      <Heading>Your App Name</Heading>
      <Space />
      <DarkToggler onClick={darkToggler} />
      <MobileToggler onClick={() => alert('Test')} />
      <Account>
        <AccountImage src={noProfile} />
        <AccountNameContainer>
          <AccountName>John Doe</AccountName>
          <AccountRole>Administrator</AccountRole>
        </AccountNameContainer>
      </Account>
    </Styled>
  );
};

const Styled = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  height: 64px;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.07) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 2px;
`;

const Image = styled.img`
  height: 32px;
  margin-right: 1rem;
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 100;

  color: inherit;
`;

const Space = styled.div`
  flex-grow: 1;
`;

const MobileToggler = styled(AiOutlineMenu)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 990px) {
    display: none;
  }
`;

const Account = styled.div`
  display: none;

  @media screen and (min-width: 990px) {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => darken(0.05, props.theme.body.high)};
    }
  }
`;

const AccountImage = styled.img`
  width: 36px;
  border-radius: 50%50%;
  margin-right: 0.75rem;
`;

const AccountNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountName = styled.div``;

const AccountRole = styled.div`
  font-size: 0.9rem;
  font-weight: 100;
`;

const DarkToggler = styled(BsFillMoonStarsFill)`
  cursor: pointer;
  color: ${(props) => (props.theme.dark ? 'yellow' : 'lightGrey')};
  padding: 0 1rem;
  font-size: 1.25rem;

  &:hover {
    color: ${(props) => (props.theme.dark ? 'lightGrey' : 'yellow')};
    transform: scale(1.25);
  }
`;
export default Navbar;
