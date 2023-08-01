import { indexListingQuery } from '../../../src/templates/feed/queries';
import { MdxListingQuery, PostList } from '../../../src/types';
import { processQueryResult } from './processQueryResult';
import { GraphqlType } from './types';

export const getIndexListing = async (
  graphql: GraphqlType
): Promise<PostList> => {
  const indexQueryResult = await graphql<MdxListingQuery>(indexListingQuery);

  return processQueryResult(indexQueryResult);
};
