import React from 'react';
import styled from 'styled-components';
import Slide from '../../components/Slide/Slide';
import {
  IoThumbsUpSharp,
  IoBarChartSharp,
  IoCheckmarkSharp,
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
const Chart = Icon(IoBarChartSharp);
const Checkmark = Icon(IoCheckmarkSharp);

const Content = styled.div`
  width: 100%;
  font-weight: 200;
  color: ${(props) => props.theme.colors.white};
`;

const Program = (): JSX.Element => {
  return (
    <Slide id="program">
      <Title>PROGRAM</Title>
      <Wrapper>
        <ThumbUp />
        <Content>
          <strong>První</strong>
          <br />
          Mým hlavním a jediným bodem programu je stížit podmínky kandidatury na
          děkana.
        </Content>
      </Wrapper>
      <Wrapper>
        <Chart />
        <Content>
          <strong>Druhý</strong>
          <br />
          Nyní může kandidovat opravdu každý, stačí nebýt komunistou. Já, ty a i
          tvá matka.
        </Content>
      </Wrapper>
      <Wrapper>
        <Checkmark />
        <Content>
          <strong>Třetí</strong>
          <br />
          Dnes se může být děkanem již opravdu každý. Nenechme si vzít svou
          fakultiu!
        </Content>
      </Wrapper>
    </Slide>
  );
};

export default Program;
