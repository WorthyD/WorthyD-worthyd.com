import type { GatsbyConfig } from 'gatsby';
import urlJoin from '../src/utils/urlJoin';
import config from '../src/config/defaultConfig';
import path from 'path';

const gatsbyConfig: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    config, // Make the merged configuration available via GraphQL
    siteUrl: urlJoin(config.website.url, config.pathPrefix),
    rssMetadata: {
      site_url: urlJoin(config.website.url, config.pathPrefix),
      feed_url: urlJoin(
        config.website.url,
        config.pathPrefix,
        config.website.rss
      ),
      title: config.website.title,
      description: config.website.description,
      image_url: `${urlJoin(config.website.url, config.pathPrefix)}${
        config.website.logoUrl
      }`,
      copyright: config.website.copyright
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, config.contentDir || '')
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              },
              escapeEntities: {}
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: config.embeddedImageWidth,
              showCaptions: ['title', 'alt']
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          backgroundColor: 'transparent'
        },
        failOnError: true
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms'
  ],
  jsxRuntime: `automatic`
};

export default gatsbyConfig;
