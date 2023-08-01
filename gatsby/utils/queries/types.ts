import { MdxListingQuery } from '../../../src/types';

export type QueryResult = {
  errors?: string;
  data?: MdxListingQuery | undefined;
};

export type GraphqlType = <TData, TVariables = any>(
  query: string,
  variables?: TVariables
) => Promise<{
  errors?: string;
  data?: TData;
}>;
