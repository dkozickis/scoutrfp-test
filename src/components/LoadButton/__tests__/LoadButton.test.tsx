import React from 'react';
import { mount } from 'enzyme';
import { LoadButton } from '../LoadButton';
import sinon from 'sinon';

it('Load button calls click event', () => {
  const onClick = sinon.fake();
  const component = mount(<LoadButton onClick={onClick} />);

  expect(component.find('button').props().children).toEqual('Load data');
  component.find('button').simulate('click');
  expect(onClick.calledOnce).toBeTruthy();
});
