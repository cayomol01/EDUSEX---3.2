import React from 'react';
import renderer from 'react-test-renderer';
import Screen4 from '../Screen4';

test('renders correctly', () => {
  const tree = renderer.create(<Screen4 />).toJSON();
  expect(tree).toMatchSnapshot();
});
