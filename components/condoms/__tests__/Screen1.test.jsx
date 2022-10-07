import React from 'react';
import renderer from 'react-test-renderer';
import Screen1 from '../Screen1';

test('renders correctly', () => {
  const tree = renderer.create(<Screen1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
