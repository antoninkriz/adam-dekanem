import React from 'react';
import styled from 'styled-components';
import Slide, { SlideTitle } from '../../components/Slide/Slide';
import { IoAtSharp, IoPeopleOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 480px;
`;

const Icon = (component: IconType) => styled(component)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  margin: 30px;
`;

const Email = Icon(IoAtSharp);

const People = Icon(IoPeopleOutline);

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
      <SlideTitle>KONTAKTY</SlideTitle>
      <Wrapper>
        <Email />
        <Link href="mailto:prochaska@adamdekanem.cz">
          prochaska@adamdekanem.cz
        </Link>
      </Wrapper>
      <Wrapper>
        <People />
        <Link href="mailto:team@adamdekanem.cz">team@adamdekanem.cz</Link>
      </Wrapper>
    </Slide>
  );
};

export default Contacts;
