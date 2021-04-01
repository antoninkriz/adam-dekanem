import styled from 'styled-components';

const Slide = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const SlideCentered = styled(Slide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SlideTitle = styled.h2`
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

export default Slide;
