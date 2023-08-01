import { Actions } from 'gatsby';
import { SiteConfig } from '../../src/config/types';
import { PostList } from '../../src/types';
import constants from '../../src/config/constants';
import { createPageMeta } from './createPageMeta';
import { saveFeedPageMeta } from './saveFeedPageMeta';
import path from 'path';
import { getFeedRoute } from './getFeedRoute';

const FEED_COMPONENT = path.resolve('./src/templates/feed/index.tsx');
// Creates a paginated feed with Gatsby pages and feed metadata
export const createFeed = async (
  config: SiteConfig,
  actions: Actions,
  feedPosts: PostList,
  feedType: string,
  feedId?: string
): Promise<void> => {
  // Calculate the page count
  const pageCount = Math.ceil(feedPosts.length / constants.postsPerFeedPage);

  // For each page
  const tasks = [...Array(pageCount).keys()].map(async (pageIndex) => {
    const pageMeta = createPageMeta(pageIndex, pageCount, feedPosts);
    await saveFeedPageMeta(feedType, pageIndex, pageMeta, feedId);

    // Create an index page that resides on `${feedId}/`
    if (pageIndex === 0) {
      const route = getFeedRoute(config, feedType, feedId);

      actions.createPage({
        path: route,
        component: FEED_COMPONENT,
        context: {
          pageCount,
          pageIndex,
          feedType,
          feedId,
          feedPageMeta: pageMeta,
        },
      });
    }
  });

  await Promise.all(tasks);
};
