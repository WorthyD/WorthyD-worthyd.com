// Cleans up and sets up the feed meta folder

import constants from '../../src/config/constants';
import fs from 'fs';
const FEED_META_DIR = `public/${constants.feedMetaDirectory}`;
export const initFeedMeta = (): void => {
  if (!fs.existsSync(FEED_META_DIR)) {
    fs.mkdirSync(FEED_META_DIR);
  } else {
    fs.rmSync(FEED_META_DIR, { recursive: true });
    fs.mkdirSync(FEED_META_DIR);
  }
};
