import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import siteConfig from '../src/config/defaultConfig';
import { schema as configSchema } from '../src/config/schema';
import { kebabCase } from '../src/utils/kebabCase';
import { BasicFrontmatter } from './types';
import urlJoin from '../src/utils/urlJoin';
import { withBasePath } from './utils/withBasePath';
import { initFeedMeta } from './utils/initFeedMeta';
import { getIndexListing } from './utils/queries/getIndexListing';
import path from 'path';
import getRelatedPosts from './utils/getRelatedPosts';
import { createFeed } from './utils/createFeed';
import { getTagListing } from './utils/queries/getTagListing';
import { getCategoryListing } from './utils/queries/getCategoryListing';

// const POST_PAGE_COMPONENT = require.resolve('../src/templates/post/query.ts');
const POST_PAGE_COMPONENT = path.resolve('./src/templates/post/query.ts');

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// Customize Gatsby schema
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    actions.createTypes(`#graphql
      ${configSchema}
    `);
  };

// Generates a slug from provided frontmatter/file path
const generateSlug = (frontmatter?: BasicFrontmatter): string | undefined => {
  if (frontmatter) {
    const { slug, title } = frontmatter;
    if (slug) return `/${kebabCase(slug)}`;

    if (title) return `/${kebabCase(title)}`;
  }

  console.error('Missing post slug and title. Unable to generate a slug.');

  return undefined;
};

// Gets invoked on GraphQl node creation
export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const config = siteConfig;
  // console.log('config', config);
  // // Filter by Mdx nodes
  if (node.internal.type === 'Mdx' && node.parent) {
    // Parse the frontmatter
    const frontmatter = node.frontmatter as BasicFrontmatter;
    // Generate a slug
    const slug = generateSlug(frontmatter);
    if (!slug) {
      console.error(
        'onCreateNode: Failed to generate a slug for an MDX post. Aborting.',
      );
      return;
    }

    // Route is the pathName without the pathPrefix, used for creating pages
    const route = withBasePath(config, slug);
    // Pathname is used for internal linking
    const pathName = urlJoin(config.pathPrefix, route);
    // URL is the absolute website url to the post
    const url = urlJoin(config.website.url, pathName);
    // Set route/url/pathName/slug fields
    actions.createNodeField({ node, name: 'slug', value: slug });
    actions.createNodeField({ node, name: 'route', value: route });
    actions.createNodeField({ node, name: 'pathName', value: pathName });
    actions.createNodeField({ node, name: 'url', value: url });
  }
};

// Gets invoked on page creation stage
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const config = siteConfig;
  // const config = withDefaults(themeOptions as unknown as SiteConfig);
  // Create lists of unique categories and tags
  const tagSet = new Set<string>();
  const categorySet = new Set<string>();
  // Initialize feed metadata
  initFeedMeta();
  // Get full post listing
  // console.log('gql', graphql)
  const fullListing = await getIndexListing(graphql);
  // Iterate over posts
  fullListing.forEach((post, index) => {
    // console.log('post', post);

    // Add post tags to our set
    const { tags } = post;
    if (tags) {
      tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }
    // Add post category to our set
    const { category } = post;
    if (category) {
      categorySet.add(category);
    }
    // Link the post page to next and previous pages
    const nextID = index + 1 < fullListing.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : fullListing.length - 1;
    const nextPost = fullListing[nextID];
    const prevPost = fullListing[prevID];

    // Posts related to the current post
    const relatedPosts = getRelatedPosts(post, fullListing);
    // Create a post page
    actions.createPage({
      path: post.route,
      component: `${POST_PAGE_COMPONENT}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        slug: post.slug,
        nexttitle: nextPost?.title,
        nextslug: nextPost?.slug,
        prevtitle: prevPost?.title,
        prevslug: prevPost?.slug,
        relatedPosts,
      },
    });
  });
  // Create a main "index" feed
  await createFeed(config, actions, fullListing, 'index');

  //  Create tag listing feeds based on our set
  const tagTasks = Array.from(tagSet.keys()).map(async (tag) => {
    const tagListing = await getTagListing(graphql, tag);
    await createFeed(config, actions, tagListing, 'tag', tag);
  });
  await Promise.all(tagTasks);
  // Create category listing feeds based on our set
  const categoryTasks = Array.from(categorySet.keys()).map(async (category) => {
    const categoryListing = await getCategoryListing(graphql, category);
    await createFeed(config, actions, categoryListing, 'category', category);
  });
  await Promise.all(categoryTasks);
};
