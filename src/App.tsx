import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import Program from './pages/Program/Program';
import Contacts from './pages/Contacts/Contacts';
import Interview from './pages/Interview/Interview';

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.primary};
`;

const App = (): JSX.Element => {
  return (
    <>
      <Body>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
            <Video />
            <Program />
            <Contacts />
          </Route>
          <Route path="/rozhovor">
            <Interview />
          </Route>
        </Switch>
      </Body>
      <Menu />
    </>
  );
};

export default App;
