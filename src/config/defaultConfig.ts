/* eslint-disable @typescript-eslint/quotes */
import { SiteConfig } from './types';

const config: SiteConfig = {
  // Website configuration
  website: {
    title: 'Daniel Worthy',
    titleShort: 'Daniel Worthy', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: 'Daniel Worthy', // Website name used for homescreen (PWA) and SEO
    description:
      'Daniel Worthy - North West Arkansas Web Developer, Carpenter and Geek', // Website description used for RSS feeds/meta description tag
    language: 'en', // Sets the global HTML lang attribute
    logoUrl: '', // Logo used for SEO
    url: 'https://worthyd.com', // Domain of your website without the pathPrefix
    rss: '/rss.xml', // Path to the RSS file
    rssTitle: "WorthyD's Blog", // Title of the RSS feed
    copyright: '© Copyright 2023', // Copyright string for the footer of the website and RSS feed.
    themeColor: '#D83850', // Used for setting manifest and progress theme colors.
    backgroundColor: '#F7F7F7', // Used for setting manifest background color.
    googleAnalyticsId: 'UA-3685134-9'
  },

  // User configuration
  user: {
    id: 'WorthyD',
    firstName: 'Daniel',
    lastName: 'Worthy',
    twitterName: 'worthyd.com',
    linkedIn: 'WorthyD',
    github: 'WorthyD',
    email: 'daniel@worthyd.com',
    location: 'North West Arkansas',
    about: '',
    avatar:
      'http://www.gravatar.com/avatar/67b727175a880f13e6240c856764670e.png'
  },

  // Organization information used for SEO
  organization: undefined,

  // Gatsby Configuration
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: '../content', // Directory for MDX posts
  assetDir: undefined, // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: undefined, // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: '/blog' // Base path for mounting pages. Allows for multiple themes to be used in a single website.
};

export default config;
