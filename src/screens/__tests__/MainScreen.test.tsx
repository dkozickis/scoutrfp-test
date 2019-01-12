import { mount } from 'enzyme';
import { MainScreen } from '../MainScreen';
import React from 'react';
import { LoadButton } from '../../components/LoadButton/LoadButton';
import { MockedProvider } from 'react-apollo/test-utils';
import { LoadIndicator } from '../../components/LoadIndicator/LoadIndicator';
import { LoadButtonConnected } from '../../components/LoadButton/LoadButtonConnected';
import { Table } from '../../components/Table/Table';
import { StoreRate } from '../../graphql/store';
import { ErrorModalConnected } from '../../components/ErrorModal/ErrorModalConnected';

describe('Main screen shows', () => {
  it('LoadButton', () => {
    const component = mount(
      <MockedProvider>
        <MainScreen isLoading={false} hasError={false} data={null} />
      </MockedProvider>
    );

    expect(component.contains(<LoadButtonConnected />)).toBeTruthy();
    expect(component.contains(<LoadIndicator />)).toBeFalsy();
  });

  it('LoadIndicator', () => {
    const component = mount(
      <MockedProvider>
        <MainScreen isLoading={true} hasError={false} data={null} />
      </MockedProvider>
    );

    expect(component.contains(<LoadButtonConnected />)).toBeFalsy();
    expect(component.contains(<LoadIndicator />)).toBeTruthy();
    expect(component.contains(<ErrorModalConnected />)).toBeFalsy();
  });

  it('ErrorModal', () => {
    const component = mount(
      <MockedProvider>
        <MainScreen isLoading={false} hasError={true} data={null} />
      </MockedProvider>
    );

    expect(component.contains(<ErrorModalConnected />)).toBeTruthy();
  });

  it('Table', () => {
    const tableData: StoreRate[] = [
      {
        code: 'USD',
        value: 10,
        __typename: 'StoreRate',
      },
    ];

    const component = mount(
      <MockedProvider>
        <MainScreen isLoading={false} hasError={false} data={tableData} />
      </MockedProvider>
    );

    expect(component.contains(<Table data={tableData} />)).toBeTruthy();
  });
});
