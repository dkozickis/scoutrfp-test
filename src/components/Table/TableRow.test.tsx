import React from 'react';
import { mount } from 'enzyme';
import { TableRow } from './TableRow';

it('Renders TableRow properly', () => {
  const testComponent = mount(
    <table>
      <tbody>
        <TableRow code="test" value={10} />
      </tbody>
    </table>
  );

  expect(testComponent.find(TableRow)).toBeTruthy();
  expect(testComponent.find(TableRow).children()).toHaveLength(1);
  expect(testComponent.find('tr').children()).toHaveLength(2);
  expect(
    testComponent
      .find('td')
      .first()
      .props().children
  ).toEqual('test');
  expect(
    testComponent
      .find('td')
      .at(1)
      .props().children
  ).toEqual(10);
});
