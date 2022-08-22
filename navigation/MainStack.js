import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Condoms from '../components/condoms/Condoms.js';
import Screen1 from '../components/condoms/Screen1.js';
import Screen2 from '../components/condoms/Screen2.js';
import Screen3 from '../components/condoms/Screen3.js';
import Screen4 from '../components/condoms/Screen4.js';
import Screen5 from '../components/condoms/Screen5.js';
import Screen6 from '../components/condoms/Screen6.js';
import Screen7 from '../components/condoms/Screen7.js';
import Screen8 from '../components/condoms/Screen8.js';
import Screen9 from '../components/condoms/Screen9.js';
import Screen10 from '../components/condoms/Screen10.js';
import Experts from '../components/experts/Experts.js';
import ScreenExp1 from '../components/experts/ScreenExp1.js';
import Users from '../components/users/Users.js';
import Questions from "../components/questions/Questions";

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            // screenOptions={{headerShown: false}}
        >

            <Stack.Screen name="Questions" component={Questions} />


            <Stack.Screen
                name = "Experts"
                component = {Experts}
            />

            <Stack.Screen
                name = "Condoms"
                component = {Condoms}
            />

            <Stack.Screen
                name = "Screen1"
                component = {Screen1}
            />

            <Stack.Screen
                name = "Screen2"
                component = {Screen2}
            />

            <Stack.Screen
                name = "Screen3"
                component = {Screen3}
            />

            <Stack.Screen
                name = "Screen4"
                component = {Screen4}
            />

            <Stack.Screen
                name = "Screen5"
                component = {Screen5}
            />

            <Stack.Screen
                name = "Screen6"
                component = {Screen6}
            />

            <Stack.Screen
                name = "Screen7"
                component = {Screen7}
            />

            <Stack.Screen
                name = "Screen8"
                component = {Screen8}
            />

            <Stack.Screen
                name = "Screen9"
                component = {Screen9}
            />

            <Stack.Screen
                name = "Screen10"
                component = {Screen10}
            />

            <Stack.Screen
                name = "ScreenExp1"
                component = {ScreenExp1}
            />

            <Stack.Screen
                name = "Users"
                component = {Users}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
