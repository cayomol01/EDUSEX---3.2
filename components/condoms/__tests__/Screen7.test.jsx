import React from 'react';
import renderer from 'react-test-renderer';
import Screen7 from '../Screen7';

test('renders correctly', () => {
    const tree = renderer.create(<Screen7/>).toJSON();
    expect(tree).toMatchSnapshot();
});
