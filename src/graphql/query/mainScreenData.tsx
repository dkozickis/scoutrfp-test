import gql from 'graphql-tag';

export const mainScreenData = gql`
  query {
    isLoading @client
    hasError @client
    data @client {
      code
      value
    }
  }
`;
