import React from 'react';
import renderer from 'react-test-renderer';
import Condoms from '../Condoms';

test('renders correctly', () => {
  const tree = renderer.create(<Condoms />).toJSON();
  expect(tree).toMatchSnapshot();
});


