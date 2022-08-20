import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../components/ScreenGuias/Guia1';
import Guias from '../components/Guias';



const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            // screenOptions={{headerShown: false}}    
        >
            <Stack.Screen 
                name="Guias"
                component={Guias}
            ></Stack.Screen>

        
            <Stack.Screen
                name = 'Guia 1'
                component = {Screen1}
            />    
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;