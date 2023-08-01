import { JSX } from 'react';
import styled from 'styled-components';

import ArticleCard from '../ArticleCard';
import LayoutWidthContainer from '../shared/LayoutWidthContainer';
import { FeedList } from '@/types';

const Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const WidthLimitedGrid = styled(LayoutWidthContainer)`
  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
  justify-items: stretch;
  padding-top: 16px;
  padding-bottom: 16px;
  max-width: 1176px;
`;

type PostListingProps = {
  listing: FeedList;
  noHero?: boolean;
};

const FeedListing = ({ listing, noHero }: PostListingProps): JSX.Element => (
  <WidthLimitedGrid>
    <Wrapper>
      {listing.map((feedItem, idx) => {
        // Check if we're rendering a placeholder
        if ('isPlaceholder' in feedItem)
          return <ArticleCard key={feedItem.key} />;

        return idx === 0 && !noHero ? (
          <ArticleCard key={feedItem.slug} post={feedItem} hero />
        ) : (
          <ArticleCard key={feedItem.slug} post={feedItem} />
        );
      })}
    </Wrapper>
  </WidthLimitedGrid>
);

export default FeedListing;
