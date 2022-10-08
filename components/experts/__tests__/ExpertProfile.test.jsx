import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native'

import ExpertProfile from '../ExpertProfile';
import ScreenChat from '../../Chat/ScreenChat';
import Experts from '../../experts/Experts';


const test_data = { name:"Dr. Orellana",
                    details:{"Especialidad": "Sexologia",
                             "Desc": "El Dr.Orellana es un ginecologo altamente cualificado y con experiencia que ofrece un trato totalmente personalizado y de calidad con sus pacientes",
                             "Direccion": "6a. Ave. 6-63 Zona 10. Edificio Sixtino 1, Oficina 1004",
                             "img": "fakeprofile.png",
                             "phone": "####-####",
                             "mail": "----",
                             "id": "drollana"}}

const Stack = createNativeStackNavigator();

const mApp = (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Experts' component={Experts}/>
            <Stack.Screen name='ExpertProfile' component={ExpertProfile}/>
            <Stack.Screen name='ScreenChat' component={ScreenChat}/>
        </Stack.Navigator>
    </NavigationContainer>
)

test('renders correctly', () => {
    const tree = renderer.create(<ExpertProfile navigation={test_data} route={{params: test_data}} />).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Reads expertos.json correctly', async () => {

    render(mApp)

    const expertsScreen = screen.queryByText('Expertos')

    expect(expertsScreen).toBeTruthy()

    const expertButton = await screen.findByText('Dr. Orellana\nEspecialidad en: Sexologia')

    fireEvent(expertButton, 'press')

    const oldScreen = await screen.findByText('Dr. Orellana')

    const name = await screen.findByText('Dr. Orellana')
    expect(name).toBeTruthy()

    const desc = await screen.findByText('El Dr.Orellana es un ginecologo altamente cualificado y con experiencia que ofrece un trato totalmente personalizado y de calidad con sus pacientes')
    expect(desc).toBeTruthy()

});

test('"Contactar" button works', async () => {

    render(mApp)

    const expertsScreen = screen.queryByText('Expertos')

    expect(expertsScreen).toBeTruthy()

    const expertButton = await screen.findByText('Dr. Orellana\nEspecialidad en: Sexologia')

    fireEvent(expertButton, 'press')

    const oldScreen = await screen.findByText('Dr. Orellana')

    expect(oldScreen).toBeTruthy()

    const button = await screen.findByText('Contactar')

    fireEvent(button, 'press')

    const newScreen = await screen

    expect(newScreen).toBeTruthy()

});
