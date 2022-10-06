import React from 'react';
import renderer from 'react-test-renderer';
import Screen10 from '../Screen10';

test('renders correctly', () => {
    const tree = renderer.create(<Screen10/>).toJSON();
    expect(tree).toMatchSnapshot();
});
