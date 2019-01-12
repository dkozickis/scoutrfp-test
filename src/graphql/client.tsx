import ApolloClient from 'apollo-boost';
import { updateDataResolver as updateData } from './mutation/updateData';
import { Store, storeDefaultState } from './store';

export const client = new ApolloClient<Store>({
  clientState: {
    defaults: storeDefaultState,
    resolvers: {
      Mutation: {
        updateData,
      },
    },
  },
});
