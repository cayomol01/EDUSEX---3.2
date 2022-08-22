import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Genero from '../components/genero/Genero';
import MenuP from '../components/genero/MenuP';
import Condoms from '../components/condoms/Condoms';
import Screen1 from '../components/condoms/Screen1';
import Screen2 from '../components/condoms/Screen2';
import Screen3 from '../components/condoms/Screen3';
import Screen4 from '../components/condoms/Screen4';
import Screen5 from '../components/condoms/Screen5';
import Screen6 from '../components/condoms/Screen6';
import Screen7 from '../components/condoms/Screen7';
import Screen8 from '../components/condoms/Screen8';
import Screen9 from '../components/condoms/Screen9';
import Screen10 from '../components/condoms/Screen10';

import Experts from '../components/experts/Experts';
import ScreenExp1 from '../components/experts/ScreenExp1';
import Users from '../components/users/Users';
import Questions from '../components/questions/Questions';
import Guia1 from '../components/ScreenGuias/Guia1';
import Guias from '../components/Guias';
import Preguntas1 from '../components/ScreenGuias/Preguntas1';
import Calification from '../components/ScreenGuias/Calificacion';
import Expertos from '../components/expertos/Expertos';
import Login from '../components/expertos/Login';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Genero"
          component={Genero}
        />
        <Stack.Screen
          name="MenuP"
          component={MenuP}
        />
        <Stack.Screen
          name="Experts"
          component={Experts}
        />

        <Stack.Screen
          name="Expertos"
          component={Expertos}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen name="Questions" component={Questions} />

        <Stack.Screen
          name="Guias"
          component={Guias}
        />

        <Stack.Screen
          name="Guia 1"
          component={Guia1}
        />

        <Stack.Screen
          name="Preguntas 1"
          component={Preguntas1}
        />
        <Stack.Screen
          name="Calificacion"
          component={Calification}
        />

        <Stack.Screen
          name="Condoms"
          component={Condoms}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />

        <Stack.Screen
          name="Screen3"
          component={Screen3}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
        />

        <Stack.Screen
          name="Screen5"
          component={Screen5}
        />

        <Stack.Screen
          name="Screen6"
          component={Screen6}
        />
        <Stack.Screen
          name="Screen7"
          component={Screen7}
        />
        <Stack.Screen
          name="Screen8"
          component={Screen8}
        />
        <Stack.Screen
          name="Screen9"
          component={Screen9}
        />

        <Stack.Screen
          name="Screen10"
          component={Screen10}
        />

        <Stack.Screen
          name="ScreenExp1"
          component={ScreenExp1}
        />

        <Stack.Screen
          name="Users"
          component={Users}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
