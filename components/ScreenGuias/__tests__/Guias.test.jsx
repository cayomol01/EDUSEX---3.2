import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Guia1 from '../Guia1';
import Guias from '../Guias';

const Stack = createNativeStackNavigator();

const mApp = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Guias" component={Guias} />
      <Stack.Screen name="Guia 1" component={Guia1} />
    </Stack.Navigator>
  </NavigationContainer>
);


test('Guia 1 Button', async () => {
  render(mApp);

  const pButton = await screen.getByTestId('Guia 1');
  expect(pButton).toBeTruthy();

  fireEvent(pButton, 'press');

  const newScreen = await screen.queryByText('Consentimiento');
  expect(newScreen).toBeTruthy();
});
