import React from 'react';
import renderer from 'react-test-renderer';
import Users from '../Users';

import Screen1 from '../../condoms/Screen1';
import Experts from '../../experts/Experts';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native'

const Stack = createNativeStackNavigator();

const mApp = (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Users" component={Users}/>
            <Stack.Screen name="Experts" component={Experts}/>
            <Stack.Screen name="Screen1" component={Screen1}/>
        </Stack.Navigator>
    </NavigationContainer>
)

test('renders correctly', () => {
    const tree = renderer.create(<Users/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders buttons', async () => {
    render(<Users/>)

    const expertsButton = screen.findByText('Realiza tus preguntas :)')
    expect(expertsButton).toBeTruthy()

    const savedButton = await screen.findByText('Guardado :)')
    expect(savedButton).toBeTruthy()

    const inviteButton = await screen.findByText('Ayuda :)')
    expect(inviteButton).toBeTruthy()

    const helpButton = await screen.findByText('Ayuda :)')
    expect(helpButton).toBeTruthy()

});

test('"Experts" Button', async () => {

    render(mApp)

    const expertsButton = await screen.findByText('Realiza tus preguntas :)')
    expect(expertsButton).toBeTruthy()

    fireEvent(expertsButton,'press')

    const newScreen = screen.queryByText('Expertos')
    expect(newScreen).toBeTruthy()



});

test('"Guardado :)" Button', async () => {

    render(mApp)

    const savedButton = await screen.findByText('Guardado :)')
    expect(savedButton).toBeTruthy()

    fireEvent(savedButton,'press')

    const newScreen = screen
    expect(newScreen).toBeTruthy()

});

test('"Invita a un amigo :)"', async () => {

    render(mApp)

    const inviteButton = await screen.findByText('Invita a un amigo :)')
    expect(inviteButton).toBeTruthy()

    fireEvent(inviteButton,'press')

    const newScreen = screen
    expect(newScreen).toBeTruthy()

});

test('"Ayuda :)"', async () => {

    render(mApp)

    const helpButton = await screen.findByText('Ayuda :)')
    expect(helpButton).toBeTruthy()

    fireEvent(helpButton,'press')

    const newScreen = screen
    expect(newScreen).toBeTruthy()

});

