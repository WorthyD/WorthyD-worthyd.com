import * as React from 'react';
import styled from 'styled-components';

import { SEO } from 'gatsby-theme-advanced';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ThemeProvider, { constants } from '../theme';

import LayoutWidthContainer from '../components/shared/LayoutWidthContainer';
import { Helmet } from 'react-helmet';

const LayoutGrid = styled.div`
  min-height: 100vh;
  min-width: 100%;

  //padding-top: 16px;
  //padding-bottom: 16px;

  display: grid;
  grid-template-columns: 100%;
//  gap: 80px;
  align-content: space-between;

  /* @media (max-width: ${constants.breakpoints.sm}) {
    gap: 40px;
  } */
`;

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    <SEO />
    <Helmet>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"
      ></script>
    </Helmet>
    <LayoutGrid>
      <LayoutWidthContainer>
        <Navigation />
      </LayoutWidthContainer>
      {children}
      <Footer />
    </LayoutGrid>
  </ThemeProvider>
);

export default MainLayout;
