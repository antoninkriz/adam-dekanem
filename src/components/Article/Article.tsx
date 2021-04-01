import styled from 'styled-components';

export const Article = styled.article`
  margin: 0 auto 90px;
  max-width: 960px;
  padding: 30px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    padding: 10px;
  }
`;

export const ArticleTitle = styled.h1`
  margin: 15px;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 1.5rem;
  }
`;

export const ArticleInfo = styled.section`
  margin: 30px;
  padding: 20px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 5px;

  @media (max-width: 1024px) {
    margin: 20px;
    padding: 15px;
  }
`;

export const ArticleInfoTitle = styled.h3`
  margin: 10px;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 1024px) {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

export const ArticleFigure = styled.figure`
  position: relative;
  width: calc(100% + 60px);
  margin: 0 -30px 0 -30px;

  @media (max-width: 1024px) {
    width: calc(100% + 20px);
    margin: 0 -10px 0 -10px;
  }
`;

export const ArticleFigcaption = styled.figcaption`
  width: fit-content;
  padding: 5px 10px;
  margin: 0 30px 0 auto;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 0 0 5px 5px;
`;

export const ArticleList = styled.ul``;

export const ArticleListItem = styled.li``;

export const ArticleImage = styled.img`
  display: block;
  width: 100%;
`;

export const ArticleLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
`;

export const ArticleParagraph = styled.p`
  margin: 15px 5px;
  text-align: justify;

  @media (max-width: 1024px) {
    text-align: unset;
  }
`;

export const ArticleStrong = styled.strong``;

export const ArticleItalic = styled.em``;

export const ArticleLine = styled.hr`
  margin: 30px 0;
`;
