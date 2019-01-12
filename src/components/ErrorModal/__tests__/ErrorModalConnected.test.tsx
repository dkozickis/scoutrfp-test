import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import React from 'react';
import { ErrorModalConnected } from '../ErrorModalConnected';
import { ErrorModal } from '../ErrorModal';

it('ErrorModalConnected passes correct props', async () => {
  const component = mount(
    <MockedProvider addTypename={false}>
      <ErrorModalConnected />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));
  expect(
    component
      .update()
      .find(ErrorModal)
      .prop('isOpen')
  ).toBeTruthy();
  expect(
    component
      .update()
      .find(ErrorModal)
      .prop('onRequestClose')
  ).toBeDefined();
});
