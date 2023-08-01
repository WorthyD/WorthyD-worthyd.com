import { tagListingQuery } from '../../../src/templates/feed/queries';
import { MdxListingQuery, PostList } from '../../../src/types';
import { processQueryResult } from './processQueryResult';
import { GraphqlType } from './types';

export const getTagListing = async (
  graphql: GraphqlType,
  tag: string
): Promise<PostList> => {
  const tagQueryResult = await graphql<MdxListingQuery>(tagListingQuery, {
    tag,
  });

  return processQueryResult(tagQueryResult);
};
