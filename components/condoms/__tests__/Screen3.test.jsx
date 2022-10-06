import React from 'react';
import renderer from 'react-test-renderer';
import Screen3 from '../Screen3';

test('renders correctly', () => {
    const tree = renderer.create(<Screen3/>).toJSON();
    expect(tree).toMatchSnapshot();
});
