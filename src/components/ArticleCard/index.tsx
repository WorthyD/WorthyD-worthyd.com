import React from 'react';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import ReadButton from './ArticleButton';
import ArticleInfo from '../ArticleInfo';
import { H3 } from '../../theme';
import { TransparentLink } from '../Links';

import ArticleCardSkeleton from './Skeleton';

import * as S from './styles';
import { Post } from '@/types';

type ArticleHeroCardProps = {
  post?: Post;
  hero?: boolean;
};

const ArticleCard = ({
  post,
  hero
}: ArticleHeroCardProps): React.JSX.Element => {
  // If no post is provided, render a skeleton view with a loading animation
  if (!post) return <ArticleCardSkeleton />;

  // if (!post.coverImg)
  //   throw Error("Failed to render ArticleCard without Gatsby coverImg.");
  // TODO: Alt Cover image
  let coverImage;
  if (post.coverImg) {
    coverImage = (
      <TransparentLink to={post.slug} ariaLabel={post.title}>
        <S.Cover
          image={getImage(post.coverImg) as IGatsbyImageData}
          alt={post.coverImageAlt}
        />
      </TransparentLink>
    );
  }

  return (
    <S.Wrapper hero={hero}>
      {coverImage}
      <S.Details hero={hero}>
        <S.Meta>
          <S.Header>
            <ArticleInfo post={post} />
            <TransparentLink to={post.slug}>
              {/* Display as an H2 for accessibility and title semantics */}
              <H3 as="h2">{post.title}</H3>
            </TransparentLink>
          </S.Header>
          <TransparentLink to={post.slug} ariaLabel={post.title}>
            <S.Excerpt hero={hero}>{post.excerpt}</S.Excerpt>
          </TransparentLink>
        </S.Meta>
        {/* {hero && <ReadButton to={post.slug} />} */}
      </S.Details>
    </S.Wrapper>
  );
};

export default ArticleCard;
