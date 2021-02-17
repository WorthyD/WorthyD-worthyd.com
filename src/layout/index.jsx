import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';

import '../styles/_base.scss';

import './index.scss';
import { Footer } from '../components/footer';

import Header from '../components/header';

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"
        ></script>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        ></link>
      </Helmet>

      <header class="page-header">
        <Header></Header>
      </header>

      <div className="page-wrap">
        <nav class="page-nav">
          <Link key="listing-page-technology" to="/blog/categories/technology/">
            Technology
          </Link>
          <Link key="listing-page-gaming" to="/blog/categories/gaming/">
            Gaming
          </Link>
          <Link key="listing-page-geek-stuff" to="/blog/categories/geek-stuff/">
            Geek Stuff
          </Link>
        </nav>
        <main class="page-main">{children}</main>
        <aside class="page-sidebar">
          <Sidebar></Sidebar>
        </aside>
      </div>
      <footer class="page-footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

/*
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          tags
          category
        }
      }
    }
  }
}

*/
