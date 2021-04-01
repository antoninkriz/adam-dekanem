import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import Slide from '../../components/Slide/Slide';
import AdamPng from './adam.png';

const ImageAdam = styled.img`
  position: absolute;
  max-width: 100vw;
  max-height: 80vh;
  margin-top: auto;
  bottom: 0;

  @media (max-width: 1024px) {
    opacity: 0.4;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 30%;

  @media (max-width: 1440px) {
    padding: 15px;
    right: 15%;
  }

  @media (max-width: 1024px) {
    padding: 15px;
    right: unset;
  }
`;

const Title = styled.h1`
  margin: 15px;
  color: transparent;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 4px ${(props) => props.theme.colors.white};

  ::selection {
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    -webkit-text-stroke: 2px ${(props) => props.theme.colors.white};
  }
`;

const Quote = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-style: italic;
  width: 100%;
  text-align: end;
`;

const Home = (): JSX.Element => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Slide id="home">
      <Helmet title="Adam Děkanem">
        <meta property="og:title" content="Adam Děkanem" />
        <meta property="og:url" content="https://adamdekanem.cz/" />
      </Helmet>
      <ImageAdam src={AdamPng} alt="Adam Procháska" />
      <TextWrapper>
        <Title>
          ADAM
          <br />
          DĚKANEM
        </Title>
        <Quote>
          To, že můžu, ještě neznamená, že bych měl…
          <br />– Adam Procháska
        </Quote>
      </TextWrapper>
    </Slide>
  );
};

export default Home;
