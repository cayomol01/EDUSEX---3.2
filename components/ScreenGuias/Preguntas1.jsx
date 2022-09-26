import * as React from 'react';
import {
  Text, View, StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

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

function Preguntas1({ navigation }) {
  const respuestas = ['F', 'F', 'F', 'F', 'V'];
  const [res1, SetAnswer1] = useState('');
  const [res2, SetAnswer2] = useState('');
  const [res3, SetAnswer3] = useState('');
  const [res4, SetAnswer4] = useState('');
  const [res5, SetAnswer5] = useState('');

  function calificar() {
    const ans = [res1, res2, res3, res4, res5];
    let buen = 0;
    for (let i = 0; i < respuestas.length; i += 1) {
      if (ans[i] === respuestas[i]) {
        buen += 1;
      }
    }

    navigation.navigate({
      name: 'Calificacion',
      params: { correctas: buen },
      merge: true,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Preguntas Consentimiento</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.containerText}>
          1. ¿El consentimiento solo se puede\n  dar a través de una forma? \n verdadero o falso
        </Text>
        <View style={styles.contenedorBotones}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer1('V')}
            >
              <Text>Verdadero</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer1('F')}
            >
              <Text>Falso</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.containerText}>
          2. Un condón es una cubierta delgada\n usada
          en el pene durante \nel coito, verdadero o falso?
        </Text>
        <View style={styles.contenedorBotones}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer2('V')}
            >
              <Text>Verdadero</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer2('F')}
            >
              <Text>Falso</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.containerText}>
          3. ¿Se puede aceptar el consentimiento\n de
          una persona no lo suficientemente consciente? verdadero o falso
        </Text>
        <View style={styles.contenedorBotones}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer3('V')}
            >
              <Text>Verdadero</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer3('F')}
            >
              <Text>Falso</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.containerText}>
          4. ¿Aprovecharse de una situación para \n
          obtener consentimiento es aceptado? verdadero o falso
        </Text>
        <View style={styles.contenedorBotones}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer4('V')}
            >
              <Text>Verdadero</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer4('F')}
            >
              <Text>Falso</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.containerText}>
          5. ¿El consentimiento se puede \nretirar en cualquier momento? \nverdadero o falso
        </Text>
        <View style={styles.contenedorBotones}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer5('V')}
            >
              <Text>Verdadero</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => SetAnswer5('F')}
            >
              <Text>Falso</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          // eslint-disable-next-line react/jsx-no-bind
          onPress={calificar}
        >
          <Text style={styles.buttonText}>Calificar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Preguntas1;
