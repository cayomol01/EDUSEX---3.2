import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Genero from '../components/genero/Genero.js';

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
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;