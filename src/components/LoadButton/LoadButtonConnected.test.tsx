import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import { LoadButtonConnected } from './LoadButtonConnected';
import { LoadButton } from './LoadButton';
import * as React from 'react';

it('LoadButtonConnected passes correct props', async () => {
  const component = mount(
    <MockedProvider addTypename={false}>
      <LoadButtonConnected />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));
  expect(
    component
      .update()
      .find(LoadButton)
      .prop('onClick')
  ).toBeDefined();
});
