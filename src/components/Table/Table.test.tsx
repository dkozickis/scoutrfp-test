import React from 'react';
import { Table } from './Table';
import { mount } from 'enzyme';
import { TableRow } from './TableRow';

it('Table renders correctly', () => {
  const renderData = [
    {
      code: 'USD',
      value: 50,
    },
    {
      code: 'AED',
      value: 30,
    },
  ];

  const component = mount(<Table data={renderData} />);

  expect(component.find('tbody').children()).toHaveLength(2);
  expect(
    component
      .find(TableRow)
      .first()
      .find('td')
      .first()
      .props().children
  ).toEqual(renderData[0].code);
  expect(
    component
      .find(TableRow)
      .at(1)
      .find('td')
      .at(1)
      .props().children
  ).toEqual(renderData[1].value);
});
