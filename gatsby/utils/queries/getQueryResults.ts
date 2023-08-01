import { PostList, queryIntoListing } from '../../../src/types';
import { QueryResult } from './types';
// Process the query results and return a PostList
export const processQueryResult = (result: QueryResult): PostList => {
  // Exit on error
  if (result.errors) {
    console.error('Error while processing query results:');
    console.error(result.errors);
    throw Error(result.errors);
  }

  if (!result.data) {
    console.warn(
      'processQueryResult: No data returned by the query. Returning empty PostList.'
    );
    return [];
  }

  return queryIntoListing(result.data);
};
