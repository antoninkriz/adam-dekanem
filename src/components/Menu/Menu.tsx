import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';

const MenuButton = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  padding: 10px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  transition: border-radius 0.2s ease-in-out;
  z-index: ${(props) => props.theme.zIndex.menuButton};
  cursor: pointer;

  :hover {
    border-radius: 35%;
  }

  @media (max-width: 1024px) {
    top: 20px;
    right: 20px;
  }
`;

interface IContent {
  opened: boolean;
}

const Content = styled.div<IContent>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: ${(props) => (props.opened ? 0 : 100)}vh;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.colors.white};
  transition: bottom 0.2s ease-in-out;
  z-index: ${(props) => props.theme.zIndex.menu};
`;

const MenuLink = styled(HashLink)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const CopyrightLink = styled.a`
  position: absolute;
  bottom: 15px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 200;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const Logo = styled.span`
  display: block;
  position: absolute;
  margin: 15px;
  top: 15px;
  left: 15px;
  color: transparent;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 2px ${(props) => props.theme.colors.primary};

  ::selection {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    -webkit-text-stroke: 1px ${(props) => props.theme.colors.primary};
  }
`;

const IconClose = styled(IoCloseSharp)`
  color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 100%;
`;

const IconMenu = styled(IoMenuSharp)`
  color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 100%;
`;

const Menu = (): JSX.Element => {
  const [opened, open] = useState(false);

  return (
    <>
      <MenuButton onClick={() => open(!opened)}>
        {opened ? <IconClose /> : <IconMenu />}
      </MenuButton>
      <Content opened={opened}>
        <Logo>
          ADAM
          <br />
          DĚKANEM
        </Logo>
        <MenuLink smooth to="/#home" onClick={() => open(false)}>
          DOMŮ
        </MenuLink>
        <MenuLink smooth to="/rozhovor" onClick={() => open(false)}>
          ROZHOVOR
        </MenuLink>
        <MenuLink smooth to="/#video" onClick={() => open(false)}>
          VIDEO
        </MenuLink>
        <MenuLink smooth to="/#program" onClick={() => open(false)}>
          PROGRAM
        </MenuLink>
        <MenuLink smooth to="/#contacts" onClick={() => open(false)}>
          KONTAKTY
        </MenuLink>
        <CopyrightLink href="https://www.antoninkriz.eu/">
          © Antonín Kříž
        </CopyrightLink>
      </Content>
    </>
  );
};

export default Menu;
