import React from 'react';
import renderer from 'react-test-renderer';
import Screen2 from '../Screen2';

test('renders correctly', () => {
    const tree = renderer.create(<Screen2/>).toJSON();
    expect(tree).toMatchSnapshot();
});
