import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  expect(shallow(
    <Card id={'robot1-1'} 
      alt={`robot1`}
      flippedCard={[]}
      matchingCards={[]}
      openedCard={[]}
      onCardClick={function() {}} />)
  ).toMatchSnapshot();
});