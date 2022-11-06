import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native';

import MenuP from '../../genero/MenuP';
import Guias from '../../ScreenGuias/Guias';
import Condoms from '../../condoms/Condoms';
import Users from '../../users/Users';
import Login from '../Login';
import Expertos from '../Expertos';
import Experts from '../../experts/Experts'

const Stack = createNativeStackNavigator();

const mApp = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Expertos" component={Expertos} />
      <Stack.Screen name="Guias" component={Guias} />
      <Stack.Screen name="Condoms" component={Condoms} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="MenuP" component={MenuP} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Experts" component={Experts} />
    </Stack.Navigator>
  </NavigationContainer>
);

test('renders correctly', () => {
  const tree = renderer.create(<Expertos />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('LOGIN1 button', async () => {
  render(mApp);

  const Login1 = await screen.getByTestId('Login1');
  expect(Login1).toBeTruthy();

  fireEvent(Login1, 'press');

  const newScreen = await screen.queryByText('Hello!!');
  expect(newScreen).toBeTruthy();
});

test('LOGIN2 button', async () => {
    render(mApp);
  
    const Login2 = await screen.getByTestId('Login2');
    expect(Login2).toBeTruthy();
  
    fireEvent(Login2, 'press');
  
    const newScreen = await screen.queryByText('Hello!!');
    expect(newScreen).toBeTruthy();
  });

test('LOGIN3 button', async () => {
    render(mApp);
  
    const Login3 = await screen.getByTestId('Login3');
    expect(Login3).toBeTruthy();
  
    fireEvent(Login3, 'press');
  
    const newScreen = await screen.queryByText('Hello!!');
    expect(newScreen).toBeTruthy();
  });

test('LOGIN4 button', async () => {
    render(mApp);
  
    const Login4 = await screen.getByTestId('Login4');
    expect(Login4).toBeTruthy();
  
    fireEvent(Login4, 'press');
  
    const newScreen = await screen.queryByText('Hello!!');
    expect(newScreen).toBeTruthy();
  });

test('GUIAS button', async () => {
    render(mApp);
  
    const guias = await screen.getByTestId('Guias');
    expect(guias).toBeTruthy();
  
    fireEvent(guias, 'press');
  
    const newScreen = await screen.queryByText('GUIAS');
    expect(newScreen).toBeTruthy();
  });

test('CONDOMS button', async () => {
    render(mApp);
  
    const condones = await screen.getByTestId('Condones');
    expect(condones).toBeTruthy();
  
    fireEvent(condones, 'press');
  
    const newScreen = await screen.queryByText('PRESERVATIVOS');
    expect(newScreen).toBeTruthy();
  });

test('MENUP button', async () => {
    render(mApp);
  
    const menu = await screen.getByTestId('Menu-p');
    expect(menu).toBeTruthy();
  
    fireEvent(menu, 'press');
  
    const newScreen = await screen.queryByText('Menu Principal');
    expect(newScreen).toBeTruthy();
  });

test('EXPERTS button', async () => {
    render(mApp);
  
    const exper = await screen.getByTestId('Experts');
    expect(exper).toBeTruthy();
  
    fireEvent(exper, 'press');
  
    const newScreen = await screen.queryByText(`EXPERTOS
    ${'\n'}
    Empieza a consultar con los profesionales
    ${'\n\n'}
    ¡Contáctalos!`);
    expect(newScreen).toBeTruthy();
  });


test('USERS button', async () => {
    render(mApp);
  
    const usuarios = await screen.getByTestId('Usuarios');
    expect(usuarios).toBeTruthy();
  
    fireEvent(usuarios, 'press');
  
    const newScreen = await screen.queryByText('Tu Perfil 🌸');
    expect(newScreen).toBeTruthy();
  });


