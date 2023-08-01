import path from 'path';
import fs from 'fs';
import { FeedPageMeta } from '../../src/types';

import constants from '../../src/config/constants';

const FEED_META_DIR = `public/${constants.feedMetaDirectory}`;
// Save feed page metadata in the public folder for later retrieval by the client side code
export const saveFeedPageMeta = async (
  feedType: string,
  feedPageIndex: number,
  pageMeta: FeedPageMeta,
  feedId?: string
): Promise<void> => {
  const filePath = path.join(
    FEED_META_DIR,
    `${feedType}${feedId ? `-${feedId}` : ''}-${feedPageIndex}.json`
  );

  const stringifiedListing = JSON.stringify(pageMeta);

  await fs.promises.writeFile(filePath, stringifiedListing);
};
