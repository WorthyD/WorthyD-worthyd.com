import { SiteConfig } from '../../src/config/types';
import { withBasePath } from './withBasePath';

// Calculate feed path
export const getFeedRoute = (
  config: SiteConfig,
  feedType: string,
  feedId?: string
): string => {
  const slug =
    feedType === 'index' ? '/' : `/${feedType}${feedId ? `/${feedId}` : ''}`;

  // Add basePath
  return withBasePath(config, slug);
};
