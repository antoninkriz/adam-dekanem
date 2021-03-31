import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import Program from './pages/Program/Program';
import Contacts from './pages/Contacts/Contacts';

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.primary};
`;

const App = (): JSX.Element => {
  return (
    <>
      <Body>
        <Home />
        <Video />
        <Program />
        <Contacts />
      </Body>
      <Menu />
    </>
  );
};

export default App;
