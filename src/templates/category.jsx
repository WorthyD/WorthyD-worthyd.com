import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
//const _ = require('lodash');
import * as _ from 'lodash';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

export default function CategoryTemplate({ pageContext, data }) {
  const { category } = pageContext;

    console.log(category);
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    console.log(category);
    const basePath = `/blog/categories/${_.kebabCase(category)}/`;
    const prevPage =
      currentPageNum - 1 === 1 ? basePath : `${basePath}${currentPageNum - 1}/`;
    const nextPage = `${basePath}${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? basePath : `${basePath}${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <PostListing postEdges={postEdges} />
        {renderPaging()}
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
