import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Genero from '../components/genero/Genero.js';
import MenuP from '../components/genero/MenuP.js';
import Condoms from '../components/condoms/Condoms.js'
const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            // screenOptions={{headerShown: false}}    
        >

            <Stack.Screen
                name = "Genero"
                component = {Genero}
            />    
             <Stack.Screen
                name = "MenuP"
                component = {MenuP}
            />

            <Stack.Screen
                name = "Condoms"
                component = {Condoms}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;