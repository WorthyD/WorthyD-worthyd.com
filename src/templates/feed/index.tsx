import { JSX } from 'react';

import Layout from '../../layouts';
import FeedListing from '../../components/FeedListing';
// import ListingPageWrapper from '../../../components/shared/ListingPageWrapper';
// import { ScreenReaderH1 } from '../../components/shared/ScreenReader';
// import useConfig from '@/config/useConfig';
import useInfiniteFeed from './useInfiniteFeed';
import { PageContext } from './types';
import SEO from '@/components/SEO';
import { Includes } from '@/components/Includes';
import ListingPageWrapper from '@/components/shared/ListingPageWrapper';

export type FeedTemplateProps = {
  pageContext: PageContext;
};

const Feed = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { feedListing, feedElementRef } = useInfiniteFeed(pageContext);

  // const config = useConfig();

  // Don't show hero images on non-index feeds
  const noHero = pageContext.feedType !== 'index';

  // Override the title for non-index feeds
  const getTitleOverride = () => {
    if (pageContext.feedId) {
      // if (pageContext.feedType === 'tag')
      //   return (
      //     <Helmet
      //       title={`Posts tagged as "${pageContext.feedId}" | ${config.website.title}`}
      //     />
      //   );
      // if (pageContext.feedType === 'category')
      //   return (
      //     <Helmet
      //       title={`Posts in category "${pageContext.feedId}" | ${config.website.title}`}
      //     />
      //   );
    }

    return null;
  };

  return (
    <Layout>
      {getTitleOverride()}
      <ListingPageWrapper ref={feedElementRef}>
        <h1>Recent Posts</h1>
        <FeedListing listing={feedListing} noHero={noHero} />
      </ListingPageWrapper>
    </Layout>
  );
};

export default Feed;
export const Head = (): JSX.Element => {
  return (
    <>
      <SEO />
      <Includes />
    </>
  );
};
