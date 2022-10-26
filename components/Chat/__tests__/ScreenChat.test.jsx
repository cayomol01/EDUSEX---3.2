import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, act} from '@testing-library/react-native'
import { cleanup } from '@testing-library/react-native';

import ScreenChat2 from '../ScreenChat2';


afterEach(cleanup);


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
    render(<ScreenChat2 usuario={'debug'}/>)

    const inptxt = screen.getByPlaceholderText('Escribe tu Mensaje...')
    expect(inptxt).toBeTruthy()

    fireEvent(inptxt, 'onChangeText', 'MemesPrueba')

    const Button = await screen.findByText('Enviar')
    expect(Button).toBeTruthy()

    fireEvent(Button, 'press')


    const tezt = await screen.findByText('MemesPrueba')
    expect(tezt).toBeTruthy()
});

test('Blank message input', async () => {
    render(<ScreenChat2 usuario={'debug'}/>)


    const inptxt = screen.getByPlaceholderText('Escribe tu Mensaje...')
    expect(inptxt).toBeTruthy()

    fireEvent(inptxt, 'onChangeText', ' ')


    const Button = await screen.findByText('Enviar')
    expect(Button).toBeTruthy()

    fireEvent(Button, 'press')

});

test('Expert message input', async () => {
    render(<ScreenChat2 usuario={'drollana3214as'}/>)

    const inptxt = screen.getByPlaceholderText('Escribe tu Mensaje...')
    expect(inptxt).toBeTruthy()

    fireEvent(inptxt, 'onChangeText', 'Su mensaje sera procesado')

    const Button = await screen.findByText('Enviar')
    expect(Button).toBeTruthy()

    fireEvent(Button, 'press')

    const tezt = await screen.findByText('Su mensaje sera procesado')
    expect(tezt).toBeTruthy()
});
