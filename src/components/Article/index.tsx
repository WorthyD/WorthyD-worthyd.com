import { JSX } from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Render from './Render';
// import Share from './Share';
import { Post } from '@/types';
import Share from './Share';

const ArticleWrapper = styled.main`
  width: 100%;

  display: grid;
  grid-gap: 24px;
  justify-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

type ArticleProps = {
  post: Post;
};

const Article = ({ post }: ArticleProps): JSX.Element => (
  <ArticleWrapper>
    <Intro post={post} />
    <Render post={post} />
    {/* <Share post={post} /> */}
  </ArticleWrapper>
);

export default Article;
