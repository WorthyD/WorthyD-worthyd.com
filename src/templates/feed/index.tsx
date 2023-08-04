import { JSX } from 'react';

import Layout from '../../layouts';
import FeedListing from '../../components/FeedListing';
import useInfiniteFeed from './useInfiniteFeed';
import { PageContext } from './types';
import SEO from '@/components/SEO';
import { Includes } from '@/components/Includes';
import ListingPageWrapper from '@/components/shared/ListingPageWrapper';
import { ScreenReaderH1 } from '@/components/shared/ScreenReader';
import { useConfig } from '@/config';

export type FeedTemplateProps = {
  pageContext: PageContext;
};

const Feed = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { feedListing, feedElementRef } = useInfiniteFeed(pageContext);

  // Don't show hero images on non-index feeds
  const noHero = pageContext.feedType !== 'index';

  // Override the title for non-index feeds

  return (
    <Layout>
      <ListingPageWrapper ref={feedElementRef}>
        <ScreenReaderH1>Recent Posts</ScreenReaderH1>
        <FeedListing listing={feedListing} noHero={noHero} />
      </ListingPageWrapper>
    </Layout>
  );
};

export default Feed;
export const Head = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const config = useConfig();
  const getTitleOverride = () => {
    if (pageContext.feedId) {
      if (pageContext.feedType === 'tag') {
        return `Posts tagged as "${pageContext.feedId}" | ${config.website.title}`;
      }

      if (pageContext.feedType === 'category') {
        return `Posts in category "${pageContext.feedId}" | ${config.website.title}`;
      }
    }

    return `Posts | ${config.website.title}`;
  };

  return (
    <>
      <title>{getTitleOverride()}</title>
      <SEO />
      <Includes />
    </>
  );
};
