import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

const matchRobots = [1];

it('renders without crashing', () => {
  expect(shallow(<CardList robots={matchRobots}/>)).toMatchSnapshot();
});