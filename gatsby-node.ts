// import type { GatsbyNode } from 'gatsby';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

// export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       plugins: [new TsconfigPathsPlugin()],
//     },
//   });
// };

import {
  onCreateWebpackConfig,
  createSchemaCustomization,
  createPages,
  onCreateNode,
} from './gatsby/gatsby-node';

export {
  onCreateWebpackConfig,
  createSchemaCustomization,
  createPages,
  onCreateNode,
};
