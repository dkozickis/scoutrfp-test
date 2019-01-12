import { mount } from 'enzyme';
import { ErrorModal } from '../ErrorModal';
import React from 'react';
import ReactModal from 'react-modal';
import sinon from 'sinon';

it('Modal works as expected', () => {
  const closeFunc = sinon.spy();

  const modal = mount(<ErrorModal isOpen={true} onRequestClose={closeFunc} ariaHideApp={false} />);

  expect(
    modal
      .find(ReactModal)
      .first()
      .find('p')
      .first()
      .props().children
  ).toEqual('Something went wrong :(');

  modal
    .find('button')
    .first()
    .simulate('click');

  expect(closeFunc.calledOnce).toBeTruthy();
});
