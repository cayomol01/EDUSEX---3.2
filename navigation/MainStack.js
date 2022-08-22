import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Guia1 from '../components/ScreenGuias/Guia1';
import Guias from '../components/Guias';
import Preguntas1 from '../components/ScreenGuias/Preguntas1'
import Calification from '../components/ScreenGuias/Calificacion'



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
                component = {Guia1}
            />

            <Stack.Screen
                name = "Preguntas 1"
                component = {Preguntas1}
            /> 
            <Stack.Screen
            name = "Calificacion"
            component = {Calification}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;