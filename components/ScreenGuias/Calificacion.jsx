import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';

function Calificacion({ route }) {
  useEffect(() => {
    if (route.params?.buenas) {
      console.log('Sent successfully');
    }
  }, [route.params?.buenas]);

  return (
    <Text>
      Has obtenido:
      {route.params?.buenas}
      {' '}
      de 5
    </Text>
  );
}

export default Calificacion;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    padding: 20,
    marginBottom: 0,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  containerButton: {
    flex: 1,
  },

  contenedorBotones: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingTop: 10,
  },

  containerText: {
    margin: 10,
    fontSize: 15,
    color: '#333333',
    marginBottom: 5,

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#dd7973',
    padding: 20,
    paddingRight: 16,
    paddingLeft: 16,
    margin: 5,
    margintTop: 10,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
  textTittle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
