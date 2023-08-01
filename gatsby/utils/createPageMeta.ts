import { FeedPageMeta, PostList } from '../../src/types';
import constants from '../../src/config/constants';
const POSTS_PER_PAGE = constants.postsPerFeedPage;
// Calculate the metadata for a feed page
export const createPageMeta = (
  pageIndex: number,
  pageCount: number,
  feedPosts: PostList
): FeedPageMeta => {
  const limit = POSTS_PER_PAGE;
  const skip = pageIndex * POSTS_PER_PAGE;

  const feedPagePosts = feedPosts.slice(skip, skip + limit);

  // Compute and save a feed page metadata file
  const nextPage = pageIndex + 1 < pageCount ? pageIndex + 1 : undefined;
  const prevPage = pageIndex > 0 ? pageIndex - 1 : undefined;

  // Calculate the amount of pages in the next batch
  const postsLeft = feedPosts.length - skip - limit;
  const nextCount = postsLeft > 0 ? Math.min(postsLeft, limit) : undefined;
  const prevCount = typeof prevPage === 'number' ? limit : undefined;

  return {
    current: pageIndex,
    next: nextPage,
    nextCount,
    prev: prevPage,
    prevCount,
    posts: feedPagePosts,
  };
};
