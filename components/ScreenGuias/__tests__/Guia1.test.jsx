import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Guia1 from '../Guia1';
import Preguntas1 from '../Preguntas1';

const Stack = createNativeStackNavigator();

const mApp = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Guia 1" component={Guia1} />
      <Stack.Screen name="Preguntas1" component={Preguntas1} />
    </Stack.Navigator>
  </NavigationContainer>
);

test('renders correctly', () => {
  const tree = renderer.create(<Guia1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Evaluar button', async () => {
  render(mApp);

  const pButton = await screen.getByTestId('PreguntasButton');
  expect(pButton).toBeTruthy();

  fireEvent(pButton, 'press');

  const newScreen = await screen.queryByText('Evaluar');
  expect(newScreen).toBeTruthy();
});
