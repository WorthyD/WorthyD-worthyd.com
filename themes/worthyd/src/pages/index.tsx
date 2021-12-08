import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useConfig } from 'gatsby-theme-advanced';

import Layout from '../layouts';
import Home from '../components/Home';

const IndexPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Index | ${config.website.title}`} />
        <Home></Home>
      </div>
    </Layout>
  );
};

export default IndexPage;
