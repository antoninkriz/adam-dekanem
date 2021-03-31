import React from 'react';
import styled from 'styled-components';
import Slide from '../../components/Slide/Slide';
import { IoAtSharp } from 'react-icons/io5';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 480px;
`;

const Icon = (component: IconType) => styled(component)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  margin: 30px;
`;

const Email = Icon(IoAtSharp);

const Link = styled.a`
  font-weight: 200;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-style: italic;
  transition: transform 0.2s ease-in-out;

  :hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;

const Contacts = (): JSX.Element => {
  return (
    <Slide id="contacts">
      <Title>KONTAKT</Title>
      <Wrapper>
        <Email />
        <Link href="mailto:prochaska@adamdekanem.cz">
          prochaska@adamdekanem.cz
        </Link>
      </Wrapper>
    </Slide>
  );
};

export default Contacts;
