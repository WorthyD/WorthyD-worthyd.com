import 'prism-themes/themes/prism-dracula.css';
import 'prismjs/plugins/command-line/prism-command-line.css';

import QueryWrapper from './src/context/QueryWrapper';
import type { GatsbyBrowser } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement: GatsbyBrowser['wrapPageElement'] = QueryWrapper;
