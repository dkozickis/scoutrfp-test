import ReactModal, { Props as ReactModalProps } from 'react-modal';

import React, { PureComponent } from 'react';

export interface ErrorModalProps extends ReactModalProps {
  onRequestClose: () => void;
}

export class ErrorModal extends PureComponent<ErrorModalProps> {
  render() {
    const { onRequestClose } = this.props;

    return (
      <ReactModal
        {...this.props}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          content: {
            color: 'lightsteelblue',
            bottom: 'unset',
          },
        }}
        ariaHideApp={false}
      >
        <p>Something went wrong :(</p>
        <button onClick={onRequestClose}>Close Modal</button>
      </ReactModal>
    );
  }
}
