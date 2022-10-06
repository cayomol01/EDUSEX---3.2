import React from 'react';
import renderer from 'react-test-renderer';
import Screen9 from '../Screen9';

test('renders correctly', () => {
    const tree = renderer.create(<Screen9/>).toJSON();
    expect(tree).toMatchSnapshot();
});
