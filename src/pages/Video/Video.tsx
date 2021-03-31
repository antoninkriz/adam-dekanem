import React from 'react';
import styled from 'styled-components';
import Slide from '../../components/Slide/Slide';

const SlideCentered = styled(Slide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const IFrame = styled.iframe`
  display: block;
  width: 100%;
  margin: auto;
  height: 100vh;
  padding: 0;
`;

const Video = (): JSX.Element => {
  return (
    <SlideCentered id="video">
      <IFrame
        src="https://www.youtube-nocookie.com/embed/gjCSJIAKEPM?vq=hd1080&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
        frameBorder="0"
      />
    </SlideCentered>
  );
};

export default Video;
