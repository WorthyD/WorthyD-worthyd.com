// GraphQL queries for each feed
export const indexListingQuery = `#graphql
query IndexFeedListing($skip: Int, $limit: Int) {
  allMdx(sort: {frontmatter: {datePublished: DESC}}, limit: $limit, skip: $skip) {
    edges {
      node {
        fields {
          slug
          route
          pathName
          url
        }
        excerpt
        frontmatter {
          title
          description
          coverAlt
          tags
          category
          datePublished
          dateModified
          cover {
                         childImageSharp {
                           gatsbyImageData(height: 368)
                         }
                       }
        }
        internal {
          contentFilePath
        }
      }
    }
  }
}
`;
// export const indexListingQuery = `#graphql
// query IndexFeedListing($skip: Int, $limit: Int) {
//   allMdx(
//     sort: { fields: [frontmatter___datePublished], order: DESC }
//     limit: $limit
//     skip: $skip
//   ) {
//     edges {
//       node {
//         fields {
//           slug
//           route
//           pathName
//           url
//         }
//         excerpt
//         frontmatter {
//           title
//           description
//           cover {
//             childImageSharp {
//               gatsbyImageData(height: 368)
//             }
//           }
//           coverAlt
//           tags
//           category
//           datePublished
//           dateModified
//         }
//       }
//     }
//   }
// }
// `;

export const tagListingQuery = `#graphql
query TagFeedListing($tag: String) {
  allMdx(
    limit: 1000
    sort: {frontmatter: {datePublished: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
          route
          pathName
          url
        }
        excerpt
        frontmatter {
          title
          tags
          category
          coverAlt
          datePublished
          dateModified
          description
        }
        internal {
          contentFilePath
        }
      }
    }
  }
}
`;
// export const tagListingQuery = `#graphql
// query TagFeedListing($tag: String) {
//   allMdx(
//     limit: 1000
//     sort: { fields: [frontmatter___datePublished], order: DESC }
//     filter: { frontmatter: { tags: { in: [$tag] } } }
//   ) {
//     totalCount
//     edges {
//       node {
//         fields {
//           slug
//           route
//           pathName
//           url
//         }
//         excerpt
//         frontmatter {
//           title
//           tags
//           category
//           cover {
//             childImageSharp {
//               gatsbyImageData(height: 368)
//             }
//           }
//           coverAlt
//           datePublished
//           dateModified
//           description
//         }
//       }
//     }
//   }
// }
// `;

export const categoryListingQuery = `#graphql
query CategoryFeedListing($category: String) {
  allMdx(
    limit: 1000
    sort: {frontmatter: {datePublished: DESC}}
    filter: {frontmatter: {category: {eq: $category}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
          route
          pathName
          url
        }
        excerpt
        frontmatter {
          title
          tags
          category
          coverAlt
          datePublished
          dateModified
          description
        }
        internal {
          contentFilePath
        }
      }
    }
  }
}
`;
