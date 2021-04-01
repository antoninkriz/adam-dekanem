import React from 'react';
import styled from 'styled-components';
import { SlideCentered } from '../../components/Slide/Slide';
import Poster from './poster.png';

const Player = styled.video`
  display: block;
  width: 100%;
  margin: auto;
  height: 100vh;
  padding: 0;
  background: ${(props) => props.theme.colors.black};
`;

const Video = (): JSX.Element => {
  return (
    <SlideCentered id="video">
      <Player src="/video.mp4" controls preload="auto" poster={Poster} />
    </SlideCentered>
  );
};

export default Video;
