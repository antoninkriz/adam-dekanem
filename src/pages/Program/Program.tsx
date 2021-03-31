import React from 'react';
import styled from 'styled-components';
import Slide from '../../components/Slide/Slide';
import {
  IoThumbsUpSharp,
  IoAnalyticsOutline,
  IoBonfireOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons';

const Title = styled.h2`
  margin: 0;
  padding: 100px;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1024px) {
    padding: 25px;
    font-size: 2rem;
  }
`;

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
const Analytics = Icon(IoAnalyticsOutline);
const Bonfire = Icon(IoBonfireOutline);

const Content = styled.div`
  width: 100%;
  padding: 0 15px;
  font-weight: 200;
  color: ${(props) => props.theme.colors.white};
`;

const Program = (): JSX.Element => {
  return (
    <Slide id="program">
      <Title>PROGRAM</Title>
      <List>
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
          <Analytics />
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
