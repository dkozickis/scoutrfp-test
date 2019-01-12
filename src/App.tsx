import React from 'react';
import { MainScreenConnected } from './screens/MainScreenConnected';
import { ApolloProvider } from 'react-apollo';
import { client } from './graphql/client';

export const App = () => (
  <ApolloProvider client={client}>
    <MainScreenConnected />
  </ApolloProvider>
);
