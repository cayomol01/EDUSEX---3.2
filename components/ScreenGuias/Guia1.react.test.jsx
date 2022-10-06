import React from 'react';
import renderer from 'react-test-renderer';
import Guia1 from './Guia1';


test('renders correctly', () => {
  const tree = renderer.create(<Guia1 />).toJSON();
  expect(tree).toMatchSnapshot();
});



