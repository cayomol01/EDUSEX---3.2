import React from 'react';
import renderer from 'react-test-renderer';
import Screen6 from '../Screen6';

test('renders correctly', () => {
    const tree = renderer.create(<Screen6/>).toJSON();
    expect(tree).toMatchSnapshot();
});
