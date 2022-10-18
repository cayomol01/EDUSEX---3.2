import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react-native'

import ScreenChat2 from '../ScreenChat2';

test('renders correctly', () => {
    const tree = renderer.create(<ScreenChat2/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Test "Enviar" button', async () => {
    render(<ScreenChat2/>)

    const Button = await screen.findByText('Enviar')
    expect(Button).toBeTruthy()

    fireEvent(Button, 'press')
});

test('Message input', async () => {
    render(<ScreenChat2/>)

    const inptxt = screen.getByPlaceholderText('Escribe tu Mensaje...')
    expect(inptxt).toBeTruthy()

    fireEvent(inptxt, 'onChangeText', 'MemesPrueba')

    const tezt = await screen.findByText('MemesPrueba')
    expect(tezt).toBeTruthy()
});
