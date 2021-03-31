import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';

const Button = styled.div`
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

const ContentLink = styled.a`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const ContentCopyright = styled.a`
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
      <Button onClick={() => open(!opened)}>
        {opened ? <IconClose /> : <IconMenu />}
      </Button>
      <Content opened={opened}>
        <ContentLink href="#home">DOMŮ</ContentLink>
        <ContentLink href="#video">VIDEO</ContentLink>
        <ContentLink href="#program">PROGRAM</ContentLink>
        <ContentLink href="#contacts">KONTAKTY</ContentLink>
        <ContentCopyright href="https://www.antoninkriz.eu/">
          © Antonín Kříž
        </ContentCopyright>
      </Content>
    </>
  );
};

export default Menu;
