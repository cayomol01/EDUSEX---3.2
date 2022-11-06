import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text, View, StyleSheet, TouchableOpacity, Image, TextInput,
} from 'react-native';

const princiIMG = require('../../assets/princi.png');

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#c2dfe3',
    width: '95%',
    marginLeft: 10,
    borderRadius: 15,
    marginTop: 30,

  },
  TextoLogin: {
    fontSize: 80,
    color: '#181818',
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',

  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',

  },
  Ilogin: {
    marginTop: 10,
    width: '100%',
    height: '35%',

  },
  Button: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '100%',
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },

});

function Login({ navigation }) {
  return (
    <View style={styles.containerLogin}>
      <Image style={styles.Ilogin} source={princiIMG} />
      <Text style={styles.TextoLogin}>Hello!!</Text>
      <Text style={styles.subtitulo}>Sign In to your account</Text>
      <TextInput placeholder="Email" style={styles.TextInput} />
      <TextInput placeholder="Password" style={styles.TextInput} />
      <StatusBar styles="auto" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Expertos')}
        testID = {"Login-Expertos"}
      >
        <View style={styles.Button}>
          <Text style={styles.text}>

            Continuar...
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Login;
