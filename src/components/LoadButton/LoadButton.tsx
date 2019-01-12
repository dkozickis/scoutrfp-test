import React, { PureComponent } from 'react';

export interface LoadButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick(): void;
}

export class LoadButton extends PureComponent<LoadButtonProps> {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} type="button" {...this.props} className="btn btn-primary">
        Load data
      </button>
    );
  }
}
