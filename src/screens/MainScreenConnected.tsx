import React from 'react';
import { mainScreenData } from '../graphql/query/mainScreenData';
import { graphql } from 'react-apollo';
import { Store } from '../graphql/store';
import { MainScreen, MainScreenProps } from './MainScreen';

export const MainScreenConnected = graphql<{}, Store, {}, MainScreenProps>(mainScreenData, {
  props: ({ data }) => {
    /**
     * `graphql` typings are a bit "broken" (there's no way to make `data` non `Partial`),
     * So I have to persuade compiler, that all variables are defined
     */
    const { isLoading, hasError, data: tableData } = data!;

    return {
      isLoading: isLoading!,
      hasError: hasError!,
      data: tableData!,
    };
  },
})(MainScreen);
