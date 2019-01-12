import gql from 'graphql-tag';
import { Store } from '../store';
import { ApolloCache } from 'apollo-cache';

export type UpdateDataVariables = { newData: Partial<Store> };

export const updateData = gql`
  mutation updateData($newData: NewDataInput) {
    updateData(newData: $newData) @client
  }
`;

export const updateDataResolver = (
  _: any,
  { newData }: { newData: UpdateDataVariables },
  { cache }: { cache: ApolloCache<Store> }
) => {
  cache.writeData({ data: newData });
  return null;
};
