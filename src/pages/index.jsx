import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import HomeHeader from '../components/home-header';
import HomeBody from '../components/home-body';
import './index.scss';

function IndexPage() {
  return (
    <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <HomeHeader></HomeHeader>
        <HomeBody></HomeBody>
    </Layout>
  );
}

export default IndexPage;
