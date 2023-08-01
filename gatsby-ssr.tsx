import 'prism-themes/themes/prism-dracula.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import QueryWrapper from './src/context/QueryWrapper';
import type { GatsbySSR } from 'gatsby';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = QueryWrapper;
