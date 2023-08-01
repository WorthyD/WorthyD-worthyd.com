import { graphql } from 'gatsby';

import PostTemplate from './index';

const TemplateComponent = PostTemplate;

export const PostTemplateQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        description
        coverAlt
        datePublished
        dateModified
        category
        tags
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
        route
        pathName
        url
      }
      internal {
        content
        contentFilePath
      }
    }
  }
`;

export default TemplateComponent;
export { Head } from './index';

// export const PostTemplateQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       body
//       excerpt
//       frontmatter {
//         title
//         description
//         cover {
//           publicURL
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//         coverAlt
//         datePublished
//         dateModified
//         category
//         tags
//       }
//       fields {
//         slug
//         route
//         pathName
//         url
//       }
//       internal {
//         content
//       }
//     }
//   }
// `;
