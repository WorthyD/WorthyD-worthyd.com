import { SiteConfig } from '../../src/config/types';
import urlJoin from '../../src/utils/urlJoin';

export const withBasePath = (config: SiteConfig, url: string): string =>
  config.basePath ? urlJoin(config.basePath, url) : url;
