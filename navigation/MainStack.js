import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Condoms from '../components/condoms/Condoms.js';
import Screen1 from '../components/condoms/Screen1.js';

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            // screenOptions={{headerShown: false}}    
        >
            <Stack.Screen
                name = "Condoms"
                component = {Condoms}
            />

            <Stack.Screen
                name = "Screen1"
                component = {Screen1}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;