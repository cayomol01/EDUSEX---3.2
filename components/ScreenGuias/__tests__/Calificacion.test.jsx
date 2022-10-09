import React from 'react';
import renderer from 'react-test-renderer';
import Calificacion from '../../ScreenGuias/Calificacion';

test('renders correctly', () => {
  const tree = renderer.create(<Calificacion />).toJSON();
  expect(tree).toMatchSnapshot();
});
