import React from 'react';
import renderer from 'react-test-renderer';
import Screen8 from '../Screen8';

test('renders correctly', () => {
  const tree = renderer.create(<Screen8 />).toJSON();
  expect(tree).toMatchSnapshot();
});
