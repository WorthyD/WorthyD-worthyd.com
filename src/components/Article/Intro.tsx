import React from 'react';
import styled from 'styled-components';

import { getImage } from 'gatsby-plugin-image';

import { H1, Body } from '../../theme';
import ArticleInfo from '../ArticleInfo';
import { CoverImage } from './Image';
import { WidthWrapper } from './Spacing';
import { Post } from '@/types';

const Wrapper = styled.section`
  width: 100%;

  display: grid;
  justify-items: center;
  grid-gap: 24px;
`;

const Details = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const Cover = styled.div`
  width: 100%;

  display: grid;
  justify-items: center;
  grid-gap: 8px;
`;

type ArticleIntroProps = {
  post: Post;
};

const ArticleIntro = ({ post }: ArticleIntroProps): React.JSX.Element => {
  // if (!post.coverImg)
  //   throw Error(
  //     'ArticleIntro: Failed to render ArticleIntro without cover image.'
  //   );

  // const imgData = getImage(post.coverImg);

  // if (!imgData)
  //   throw Error('ArticleIntro: Failed to getImage from post.coverImg.');

  let coverImage;
  if (post.coverImg) {
    const imgData = getImage(post.coverImg);
    if (imgData) {
      coverImage = <CoverImage image={imgData} alt={post.coverImageAlt} />;
    }
  }

  return (
    <Wrapper>
      <WidthWrapper>
        <Details>
          <H1>{post.title}</H1>
          <Body>{post.excerpt}</Body>
        </Details>
      </WidthWrapper>
      <Cover>
        <WidthWrapper>
          <ArticleInfo post={post} />
        </WidthWrapper>
        {coverImage}
      </Cover>
    </Wrapper>
  );
};

export default ArticleIntro;
