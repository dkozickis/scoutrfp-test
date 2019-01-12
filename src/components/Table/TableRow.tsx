import React, { PureComponent } from 'react';
import { StoreRate } from '../../graphql/store';

export type TableRowProps = Pick<StoreRate, 'value' | 'code'>;

export class TableRow extends PureComponent<TableRowProps> {
  render() {
    const { code, value } = this.props;

    return (
      <tr>
        <td>{code}</td>
        <td>{value}</td>
      </tr>
    );
  }
}
