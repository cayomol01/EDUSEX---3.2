import React from 'react';
import renderer from 'react-test-renderer';
import MenuP from '../MenuP';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native'

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
    const tree = renderer.create(<MenuP/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Test GUIAS button', async () => {
    render(mApp)

    const GUIASButton = await screen.findByText('Guias')
    expect(GUIASButton).toBeTruthy()

    fireEvent(GUIASButton, 'press')

    const newScreen = await screen.queryByText('Guias')
    expect(newScreen).toBeTruthy()

});

test('Test PRESERVATIVOS button', async () => {
    render(mApp)

    const PRESERVATIVOSButton = await screen.findByText('Preservativos')
    expect(PRESERVATIVOSButton).toBeTruthy()

    fireEvent(PRESERVATIVOSButton, 'press')

    const newScreen = await screen.queryByText('PRESERVATIVOS')
    expect(newScreen).toBeTruthy()

});

test('Test PREGUNTAS button', async () => {
    render(mApp)

    const PREGUNTASButton = await screen.findByText('Preguntas')
    expect(PREGUNTASButton).toBeTruthy()

    fireEvent(PREGUNTASButton, 'press')

    const newScreen = await screen
    expect(newScreen).toBeTruthy()


});
