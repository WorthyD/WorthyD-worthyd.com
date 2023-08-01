import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useConfig } from 'gatsby-theme-advanced';

import Layout from '../layouts';
import Resume from '../components/Resume';

const ResumePage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Resume | ${config.website.title}`} />
        <Resume></Resume>
      </div>
    </Layout>
  );
};

export default ResumePage;
