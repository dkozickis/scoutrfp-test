import React, { PureComponent } from 'react';
import { TableRowProps, TableRow } from './TableRow';

interface TableProps {
  data: TableRowProps[];
}

export class Table extends PureComponent<TableProps> {
  render() {
    const { data } = this.props;

    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Code</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <TableRow {...rowData} key={rowData.code} />
          ))}
        </tbody>
      </table>
    );
  }
}
