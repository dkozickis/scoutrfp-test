import React, { PureComponent } from 'react';
import { Store } from '../graphql/store';
import { LoadButtonConnected } from '../components/LoadButton/LoadButtonConnected';
import { LoadIndicator } from '../components/LoadIndicator/LoadIndicator';
import { Table } from '../components/Table/Table';
import { ErrorModalConnected } from '../components/ErrorModal/ErrorModalConnected';

export type MainScreenProps = Store;

export class MainScreen extends PureComponent<MainScreenProps> {
  render() {
    const { isLoading, hasError, data } = this.props;

    if (!isLoading && !hasError && !data) {
      return <LoadButtonConnected />;
    }

    if (isLoading) {
      return <LoadIndicator />;
    }

    if (hasError) {
      return <ErrorModalConnected />;
    }

    if (data) {
      return <Table data={data} />;
    }
  }
}
