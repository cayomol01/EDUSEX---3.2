import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native';

import Expertos from '../Expertos';
import Login from '../Login';

const Stack = createNativeStackNavigator();

const mApp = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Expertos" component={Expertos} />
    </Stack.Navigator>
  </NavigationContainer>
);

test('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('EXPERTOS button', async () => {
  render(mApp);

  const expertButton = await screen.getByTestId('Login-Expertos');
  expect(expertButton).toBeTruthy();

  fireEvent(expertButton, 'press');

  const newScreen = await screen.queryByText('Bienvenid@');
  expect(newScreen).toBeTruthy();
});
