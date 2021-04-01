import React from 'react';
import styled from 'styled-components';
import Slide, { SlideTitle } from '../../components/Slide/Slide';
import {
  IoThumbsUpSharp,
  IoFlaskSharp,
  IoBonfireOutline,
  IoChevronForward,
} from 'react-icons/io5';
import { IconType } from 'react-icons';
import { HashLink } from 'react-router-hash-link';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 480px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Icon = (component: IconType) => styled(component)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.white};
  margin: 30px;
`;

const ThumbUp = Icon(IoThumbsUpSharp);
const Flask = Icon(IoFlaskSharp);
const Bonfire = Icon(IoBonfireOutline);

const Content = styled.div`
  width: 100%;
  padding: 0 15px;
  font-weight: 200;
  color: ${(props) => props.theme.colors.white};
`;

const LinkButton = styled(HashLink)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px;
  margin: 10px 10px 30px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const Program = (): JSX.Element => {
  return (
    <Slide id="program">
      <SlideTitle>PROGRAM</SlideTitle>
      <List>
        <LinkButton to="/rozhovor">
          ROZHOVOR S KANDIDÁTEM <IoChevronForward />
        </LinkButton>
        <Wrapper>
          <ThumbUp />
          <Content>
            <strong>Ztížení podmínek kandidatury na děkana</strong>
            <br />
            Zavedení základních podmínek pro kandidaturu na děkana, aby nedošlo
            nedošlo k přehlcení systému.
          </Content>
        </Wrapper>
        <Wrapper>
          <Bonfire />
          <Content>
            <strong>Volitelný humanitní předmět kurz přežití </strong>
            <br />
            BI-KPZ určený především studentům prvních ročníků a všem, kdo se
            právě odstěhovali od maminky.
          </Content>
        </Wrapper>
        <Wrapper>
          <Flask />
          <Content>
            <strong>Rozšíření výzkumu podílového kritéria pro funkce</strong>
            <br />
            Založení výzkumné skupiny na naší fakultě pro výzkum této oblasti.
          </Content>
        </Wrapper>
      </List>
    </Slide>
  );
};

export default Program;
