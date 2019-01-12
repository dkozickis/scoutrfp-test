import { mount } from 'enzyme';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import * as React from 'react';
import { MainScreenConnected } from './MainScreenConnected';
import { mainScreenData } from '../graphql/query/mainScreenData';
import { MainScreen } from './MainScreen';

it('MainScreenConnected passes correct props', async () => {
  const mocks: ReadonlyArray<MockedResponse> = [
    {
      request: {
        query: mainScreenData,
      },
      result: {
        data: {
          isLoading: true,
          hasError: false,
          data: null,
        },
      },
    },
  ];

  const component = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MainScreenConnected />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));
  expect(
    component
      .update()
      .find(MainScreen)
      .prop('isLoading')
  ).toBeTruthy();
  expect(
    component
      .update()
      .find(MainScreen)
      .prop('hasError')
  ).toBeFalsy();
  expect(
    component
      .update()
      .find(MainScreen)
      .prop('data')
  ).toBeNull();
});
