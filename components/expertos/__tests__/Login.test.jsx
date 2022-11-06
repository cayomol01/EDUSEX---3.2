import React from 'react';
import renderer from 'react-test-renderer';
import Genero from '../Genero';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native'

import MenuP from '../../genero/MenuP';
import Login from '../Login';

const Stack = createNativeStackNavigator();

const mApp = (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Genero' component={Genero}/>
            <Stack.Screen name='MenuP' component={MenuP}/>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
)

test('renders correctly', () => {
    const tree = renderer.create(<Genero/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('FEMENINO button', async () => {
    render(mApp)

    const femeninoButton = await screen.findByText('FEMENINO')
    expect(femeninoButton).toBeTruthy()

    fireEvent(femeninoButton, 'press')

    const newScreen = await screen.queryByText('Menu Principal')
    expect(newScreen).toBeTruthy()


});

test('MASCULINO button', async () => {
    render(mApp)

    const MASCULINOButton = await screen.findByText('MASCULINO')
    expect(MASCULINOButton).toBeTruthy()

    fireEvent(MASCULINOButton, 'press')

    const newScreen = await screen.queryByText('Menu Principal')
    expect(newScreen).toBeTruthy()

});

test('OTRO button', async () => {
    render(mApp)

    const OTROButton = await screen.findByText('OTRO')
    expect(OTROButton).toBeTruthy()

    fireEvent(OTROButton, 'press')

    const newScreen = await screen.queryByText('Menu Principal')
    expect(newScreen).toBeTruthy()

});

test('Render Experto button', async () => {
    render(mApp)

    const Screen = screen.queryByText('EDUSEX')
    expect(Screen).toBeTruthy()

    const ExpertButton = await screen.findByText('Experto')
    expect(ExpertButton).toBeTruthy()

    fireEvent(ExpertButton, 'press')

    const newScreen = await screen.queryByText('Hello!!')
    expect(newScreen).toBeTruthy()

});
