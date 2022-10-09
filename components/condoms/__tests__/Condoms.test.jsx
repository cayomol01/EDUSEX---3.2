import React from 'react';
import renderer from 'react-test-renderer';
import Condoms from '../Condoms';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native'

import Screen1 from '../../condoms/Screen1';
import Screen2 from '../../condoms/Screen2';
import Screen3 from '../../condoms/Screen3';
import Screen4 from '../../condoms/Screen4';
import Screen5 from '../../condoms/Screen5';
import Screen6 from '../../condoms/Screen6';
import Screen7 from '../../condoms/Screen7';
import Screen8 from '../../condoms/Screen8';
import Screen9 from '../../condoms/Screen9';
import Screen10 from '../../condoms/Screen10';

const Stack = createNativeStackNavigator();

const mApp = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Condoms" component={Condoms} />
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Screen3" component={Screen3}/>
        <Stack.Screen name="Screen4" component={Screen4}/>
        <Stack.Screen name="Screen5" component={Screen5}/>
        <Stack.Screen name="Screen6" component={Screen6}/>
        <Stack.Screen name="Screen7" component={Screen7}/>
        <Stack.Screen name="Screen8" component={Screen8}/>
        <Stack.Screen name="Screen9" component={Screen9}/>
        <Stack.Screen name="Screen10" component={Screen10}/>
      </Stack.Navigator>
    </NavigationContainer>
)

test('renders correctly', () => {
  const tree = renderer.create(<Condoms />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Test "Anillo Vaginal" button', async () => {
    render(mApp)

    const AnilloVaginalButton = await screen.findByText('Anillo Vaginal')
    expect(AnilloVaginalButton).toBeTruthy()

    fireEvent(AnilloVaginalButton, 'press')

    const newScreen = await screen.queryAllByText('Anillo Vaginal')
    expect(newScreen).toBeTruthy()
});

test('Test "Capuchón Cervical" button', async () => {
    render(mApp)

    const CapuchCervicalButton = await screen.findByText('Capuchón Cervical')
    expect(CapuchCervicalButton).toBeTruthy()

    fireEvent(CapuchCervicalButton, 'press')

    const newScreen = await screen.queryAllByText('Capuchón Cervical')
    expect(newScreen).toBeTruthy()
});

test('Test "Condón Femenino" button', async () => {
    render(mApp)

    const CondFemeninoButton = await screen.findByText('Condón Femenino')
    expect(CondFemeninoButton).toBeTruthy()

    fireEvent(CondFemeninoButton, 'press')

    const newScreen = await screen.queryAllByText('Condón Femenino')
    expect(newScreen).toBeTruthy()

});

test('Test "Condón Masculino" button', async () => {
    render(mApp)

    const CondonMasculinoButton = await screen.findByText('Condón Masculino')
    expect(CondonMasculinoButton).toBeTruthy()

    fireEvent(CondonMasculinoButton, 'press')

    const newScreen = await screen.queryAllByText('Condón Masculino')
    expect(newScreen).toBeTruthy()

});

test('Test "Diafragma" button', async () => {
    render(mApp)

    const DiagrafmaButton = await screen.findByText('Diafragma')
    expect(DiagrafmaButton).toBeTruthy()

    fireEvent(DiagrafmaButton, 'press')

    const newScreen = await screen.queryAllByText('Diafragma')
    expect(newScreen).toBeTruthy()

});

test('Test "Espermicida y Gel" button', async () => {
    render(mApp)

    const EspermicidaButton = await screen.findByText('Espermicida y Gel')
    expect(EspermicidaButton).toBeTruthy()

    fireEvent(EspermicidaButton, 'press')

    const newScreen = await screen.queryAllByText('Espermicida y Gel')
    expect(newScreen).toBeTruthy()

});

test('Test "Esponja Anticonceptiva" button', async () => {
    render(mApp)

    const EsponjaButton = await screen.findByText('Esponja Anticonceptiva')
    expect(EsponjaButton).toBeTruthy()

    fireEvent(EsponjaButton, 'press')

    const newScreen = await screen.queryAllByText('Esponja Anticonceptiva')
    expect(newScreen).toBeTruthy()

});

test('Test "Inyección Anticonceptiva" button', async () => {
    render(mApp)

    const InyeccionButton = await screen.findByText('Inyección Anticonceptiva')
    expect(InyeccionButton).toBeTruthy()

    fireEvent(InyeccionButton, 'press')

    const newScreen = await screen.queryAllByText('Inyección Anticonceptiva')
    expect(newScreen).toBeTruthy()

});

test('Test "Parche Anticonceptivo" button', async () => {
    render(mApp)

    const ParcheButton = await screen.findByText('Parche Anticonceptivo')
    expect(ParcheButton).toBeTruthy()

    fireEvent(ParcheButton, 'press')

    const newScreen = await screen.queryAllByText('Parche Anticonceptivo')
    expect(newScreen).toBeTruthy()

});

test('Test "Pastilla" button', async () => {
    render(mApp)

    const PastillaButton = await screen.findByText('Pastilla')
    expect(PastillaButton).toBeTruthy()

    fireEvent(PastillaButton, 'press')

    const newScreen = await screen.queryAllByText('Pastilla')
    expect(newScreen).toBeTruthy()

});
