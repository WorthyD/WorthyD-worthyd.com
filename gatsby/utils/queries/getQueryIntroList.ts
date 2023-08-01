import { MdxListingQuery, Post, mdxNodeIntoPost } from '../../../src/types';

// Convert MDX based GraphQL query responses into a Post list
export const queryIntoListing = (listing: MdxListingQuery): Array<Post> => {
  const { edges } = listing.allMdx;

  const nodes = edges.map((edge) => edge.node);

  return nodes.map((node) => mdxNodeIntoPost(node));
};
