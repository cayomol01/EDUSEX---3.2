import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../navbar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native'

import MenuP from '../../genero/MenuP';
import Condoms from '../../condoms/Condoms';
import Users from '../../users/Users';
import Questions from '../../questions/Questions';
import Guias from '../../ScreenGuias/Guias';

const Stack = createNativeStackNavigator();

const mApp = (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='MenuP' component={MenuP} />
            <Stack.Screen name="Questions" component={Questions} />
            <Stack.Screen name="Guias" component={Guias} />
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="Condoms" component={Condoms} />
        </Stack.Navigator>
    </NavigationContainer>
)

test('renders correctly', () => {
    const tree = renderer.create(<Navbar/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Renders buttons', async () => {

    render(mApp)

    const guides = screen.getByTestId('guides')
    expect(guides).toBeTruthy()

    const preser = screen.getByTestId('preser')
    expect(preser).toBeTruthy()

    const home = screen.getByTestId('home')
    expect(home).toBeTruthy()

    const questions = screen.getByTestId('questions')
    expect(questions).toBeTruthy()

    const profile = screen.getByTestId('profile')
    expect(profile).toBeTruthy()

});

test('"Guides" button', async () => {

    render(mApp)

    const guidesButton = screen.getByTestId("guides")
    expect(guidesButton).toBeTruthy()

    fireEvent(guidesButton, 'press')

    const newScreen = await screen

    expect(newScreen).toBeTruthy()

});

test('"Preservativos" button', async () => {

    render(mApp)

    const guidesButton = screen.getByTestId("preser")
    expect(guidesButton).toBeTruthy()

    fireEvent(guidesButton, 'press')

    const newScreen = await screen

    expect(newScreen).toBeTruthy()

});

test('"Home" button', async () => {

    render(mApp)

    const guidesButton = screen.getByTestId("home")
    expect(guidesButton).toBeTruthy()

    fireEvent(guidesButton, 'press')

    const newScreen = await screen

    expect(newScreen).toBeTruthy()

});

test('"Questions" button', async () => {

    render(mApp)

    const guidesButton = screen.getByTestId("questions")
    expect(guidesButton).toBeTruthy()

    fireEvent(guidesButton, 'press')

    const newScreen = await screen

    expect(newScreen).toBeTruthy()

});

test('"Profile" button', async () => {

    render(mApp)

    const guidesButton = screen.getByTestId("profile")
    expect(guidesButton).toBeTruthy()

    fireEvent(guidesButton, 'press')

    const newScreen = await screen

    expect(newScreen).toBeTruthy()

});
