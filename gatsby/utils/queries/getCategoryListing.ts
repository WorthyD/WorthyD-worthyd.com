import { categoryListingQuery } from '../../../src/templates/feed/queries';
import { MdxListingQuery, PostList } from '../../../src/types';
import { processQueryResult } from './processQueryResult';
import { GraphqlType } from './types';

export const getCategoryListing = async (
  graphql: GraphqlType,
  category: string
): Promise<PostList> => {
  const categoryQueryResult = await graphql<MdxListingQuery>(
    categoryListingQuery,
    { category }
  );

  return processQueryResult(categoryQueryResult);
};
