import React from 'react';
import renderer from 'react-test-renderer';
import Questions from '../Questions';
import ItemSeparatorView from '../Questions'

import { render, screen, fireEvent } from '@testing-library/react-native'


test('renders correctly', () => {
    const tree = renderer.create(<Questions/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('question renders', async () => {
    render(<Questions/>)

    const question = await screen.findByText('Masturbarse es malo para la salud?')
    expect(question).toBeTruthy()
});

test('click question', async () => {
    render(<Questions/>)

    const question = await screen.findByText('Masturbarse es malo para la salud?')
    fireEvent(question,'press')

});

test('render item separator', async () => {
    render(<ItemSeparatorView/>)
});

test('question text input', async () => {
    render(<Questions/>)

    const inpu = screen.getByPlaceholderText('¿Cuál es tu duda?')
    expect(inpu).toBeTruthy()

    fireEvent(inpu, 'onChangeText', 'pronombres');

    const question = await screen.findByText('¿Qué son los pronombres?')
    fireEvent(question,'press')

});

test('blank text input', async () => {
    render(<Questions/>)

    const inpu = screen.getByPlaceholderText('¿Cuál es tu duda?')
    expect(inpu).toBeTruthy()

    fireEvent(inpu, 'onChangeText', '');

});

test('uppercase text input', async () => {
    render(<Questions/>)

    const inpu = screen.getByPlaceholderText('¿Cuál es tu duda?')
    expect(inpu).toBeTruthy()

    fireEvent(inpu, 'onChangeText', 'PRONOMBRES');

    const question = await screen.findByText('¿Qué son los pronombres?')
    fireEvent(question,'press')

});
