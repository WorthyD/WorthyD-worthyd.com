import * as React from 'react';
// import styled from 'styled-components';
// import '../theme/reset.scss';
// import '../theme/color.scss';
// import '../theme/scrollbars.scss';
// import '../theme/typography.scss';
import isPropValid from '@emotion/is-prop-valid';
import './styles.scss';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
// import ThemeProvider, { constants } from '../theme';

import LayoutWidthContainer from '../components/shared/LayoutWidthContainer';
import SEO from '@/components/SEO';
import ThemeProvider, { constants } from '@/theme';
import styled, { StyleSheetManager } from 'styled-components';
// import { Helmet } from 'react-helmet';

// const LayoutGrid = styled.div`
//   min-height: 100vh;
//   min-width: 100%;

//   //padding-top: 16px;
//   //padding-bottom: 16px;

//   display: grid;
//   grid-template-columns: 100%;
//   //  gap: 80px;
//   align-content: space-between;

//   /* @media (max-width: ${constants.breakpoints.sm}) {
//     gap: 40px;
//   } */
// `;
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

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      {' '}
      <ThemeProvider>
        {/* <SEO /> */}

        {/* <Helmet>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"
      ></script>
       <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Fira+Sans:ital,wght@0,400;0,500;1,400&family=Fira+Code:wght@500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    */}
        <LayoutGrid>
          <LayoutWidthContainer>
            <Navigation />
          </LayoutWidthContainer>
          {children}
          <Footer />
        </LayoutGrid>
      </ThemeProvider>
    </StyleSheetManager>
  </>
);

export default MainLayout;
