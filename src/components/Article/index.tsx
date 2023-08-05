import { JSX } from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Render from './Render';
// import Share from './Share';
import { Post } from '@/types';
import { ARTICLE_WIDTH } from './Spacing';
import { Caption, H4 } from '../../theme';
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
const BlockquoteStyle = styled.blockquote`
  padding: 1rem;

  background-color: var(--color-grey-100);

  border-left: 8px solid var(--color-warning);
  max-width: ${ARTICLE_WIDTH};
`;

const Article = ({ post }: ArticleProps): JSX.Element => (
  <ArticleWrapper>
    <Intro post={post} />
    {post.tags && post.tags.indexOf('livejournal') > -1 && (
      <BlockquoteStyle>
        <H4>Warning: Here be dragons</H4>
        <Caption>
          This is an archived post from my LiveJournal account. Take everything
          in the post with a 5 pound grain of salt.{' '}
        </Caption>
      </BlockquoteStyle>
    )}
    {post.datePublished && post.datePublished < new Date('1/1/2020') && (
      <BlockquoteStyle>
        <Caption>
          This is an old post. Some of the images and links may no longer work.
          The text is preserved here for posterity.
        </Caption>
      </BlockquoteStyle>
    )}

    <Render post={post} />
    {/* <Share post={post} /> */}
  </ArticleWrapper>
);

export default Article;
