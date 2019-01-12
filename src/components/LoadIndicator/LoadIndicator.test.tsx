import { mount } from 'enzyme';
import { LoadIndicator } from './LoadIndicator';
import React from 'react';

/**
 * This is a bit over the top testing, but we're making sure nothing breaks in the future.
 * Right? :D
 */
it('Loading indicator shows... indicator', () => {
  const component = mount(<LoadIndicator />);

  expect(component.find('div').props().children).toEqual('Loading...');
});
