import React from 'react';
import renderer from 'react-test-renderer';
import Screen5 from '../Screen5';

test('renders correctly', () => {
  const tree = renderer.create(<Screen5 />).toJSON();
  expect(tree).toMatchSnapshot();
});
