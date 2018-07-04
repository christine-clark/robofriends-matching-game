import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    card: {},
    robots: [],
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
 })

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('shuffle Robots', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
  expect(wrapper.instance().shuffleRobots()).toEqual([]);
});
