import React from 'react';
import renderer from 'react-test-renderer';
import Preguntas1 from '../Preguntas1';

test('renders correctly', () => {
  const tree = renderer.create(<Preguntas1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
