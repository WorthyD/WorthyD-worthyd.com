import React from 'react';
import styled from 'styled-components';

import FeedListing from '../FeedListing';
import { PostList } from '@/types';

const Wrapper = styled.aside`
  display: grid;
  grid-gap: 40px;

  justify-items: center;
`;

const Label = styled.h2`
  text-transform: uppercase;
  color: var(--color-grey-700);
`;

type RelatedPostsProps = {
  list: PostList;
};

const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
  <Wrapper>
    <Label>RELATED POSTS</Label>
    <FeedListing noHero listing={list} />
  </Wrapper>
);

export default RelatedPosts;
