import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layout/index2';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import HomeHeader from '../components/home-header';
import HomeBody from '../components/home-body';
import './index.scss';

function IndexPage() {
  return (
    <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <HomeHeader></HomeHeader>
        <HomeBody></HomeBody>
    </Layout>
  );
}

export default IndexPage;
