import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Preguntas1 from '../Preguntas1';

import Calificacion from '../Calificacion';

const Stack = createNativeStackNavigator();

const mApp = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Preguntas1" component={Preguntas1} />
      <Stack.Screen name="Calificacion" component={Calificacion} />
    </Stack.Navigator>
  </NavigationContainer>
);

test('renders correctly', () => {
  const tree = renderer.create(<Preguntas1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Test "1" buttons', async () => {
  render(mApp);

  const VButton = await screen.getByTestId('1Verdad');
  expect(VButton).toBeTruthy();

  fireEvent(VButton, 'press');

  const FButton = await screen.getByTestId('1Falso');
  expect(FButton).toBeTruthy();

  fireEvent(FButton, 'press');
});

test('Test "2" buttons', async () => {
  render(mApp);

  const VButton = await screen.getByTestId('2Verdad');
  expect(VButton).toBeTruthy();

  fireEvent(VButton, 'press');

  const FButton = await screen.getByTestId('2Falso');
  expect(FButton).toBeTruthy();

  fireEvent(FButton, 'press');
});

test('Test "3" buttons', async () => {
  render(mApp);

  const VButton = await screen.getByTestId('3Verdad');
  expect(VButton).toBeTruthy();

  fireEvent(VButton, 'press');

  const FButton = await screen.getByTestId('3Falso');
  expect(FButton).toBeTruthy();

  fireEvent(FButton, 'press');
});

test('Test "4" buttons', async () => {
  render(mApp);

  const VButton = await screen.getByTestId('4Verdad');
  expect(VButton).toBeTruthy();

  fireEvent(VButton, 'press');

  const FButton = await screen.getByTestId('4Falso');
  expect(FButton).toBeTruthy();

  fireEvent(FButton, 'press');
});

test('Test "5" buttons', async () => {
  render(mApp);

  const VButton = await screen.getByTestId('5Verdad');
  expect(VButton).toBeTruthy();

  fireEvent(VButton, 'press');

  const FButton = await screen.getByTestId('5Falso');
  expect(FButton).toBeTruthy();

  fireEvent(FButton, 'press');
});

test('Test "Calificar" button', async () => {
  render(mApp);

  const CalificarButton = await screen.findByText('Calificar');
  expect(CalificarButton).toBeTruthy();

  fireEvent(CalificarButton, 'press');

  const newScreen = await screen;
  expect(newScreen).toBeTruthy();
});

test('Calificar 5/5', async () => {
  render(mApp);

  const button1 = await screen.getByTestId('1Falso');
  expect(button1).toBeTruthy();

  const button2 = await screen.getByTestId('2Falso');
  expect(button2).toBeTruthy();

  const button3 = await screen.getByTestId('3Falso');
  expect(button3).toBeTruthy();

  const button4 = await screen.getByTestId('4Falso');
  expect(button4).toBeTruthy();

  const button5 = await screen.getByTestId('5Verdad');
  expect(button5).toBeTruthy();

  fireEvent(button1, 'press');
  fireEvent(button2, 'press');
  fireEvent(button3, 'press');
  fireEvent(button4, 'press');
  fireEvent(button5, 'press');

  const CalificarButton = await screen.findByText('Calificar');
  expect(CalificarButton).toBeTruthy();

  fireEvent(CalificarButton, 'press');

  const newScreen = await screen.queryByText('Has obtenido: 5 de 5');
});

test('Calificar 0/5', async () => {
  render(mApp);

  const button1 = await screen.getByTestId('1Verdad');
  expect(button1).toBeTruthy();

  const button2 = await screen.getByTestId('2Verdad');
  expect(button2).toBeTruthy();

  const button3 = await screen.getByTestId('3Verdad');
  expect(button3).toBeTruthy();

  const button4 = await screen.getByTestId('4Verdad');
  expect(button4).toBeTruthy();

  const button5 = await screen.getByTestId('5Falso');
  expect(button5).toBeTruthy();

  fireEvent(button1, 'press');
  fireEvent(button2, 'press');
  fireEvent(button3, 'press');
  fireEvent(button4, 'press');
  fireEvent(button5, 'press');

  const CalificarButton = await screen.findByText('Calificar');
  expect(CalificarButton).toBeTruthy();

  fireEvent(CalificarButton, 'press');

  const newScreen = await screen.queryByText('Has obtenido: 0 de 5');
});
