import * as React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    marginBottom: 0,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },

  textTittle: {
    fontWeight: 'bold',
    fontSize: 40,
  },

  image: {
    width: '100%',
    height: '70%',
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
    marginHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
});

function Guia1({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Consentimiento</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.containerText}>
          El consentimiento es el permiso que una persona da para
          que se realice una acción. En el contexto de desarrollo
          personal de una persona, lo que se entiende como
          consentimiento es el permiso que una persona da para que
          se realice una acción que involucre su cuerpo o su bienestar.
        </Text>
        <Text style={styles.containerText}>
          El consentimiento en el ámbito sexual se puede expresar
          de distintas maneras. Como el consentimiento a actos
          sexuales, a afecto físico e incluso a fotos explicitas.
        </Text>
        <Text style={styles.containerText}>
          Por lo tanto se deben tomar varias cosas en cuenta al
          empezar un acto sexual. Dentro de estas se pueden encontrar:
        </Text>
        <Text style={styles.containerText}>
          -El consentimiento se puede retirar en cualquier momento
        </Text>
        <Text style={styles.containerText}>
          - No se debe intentar convencer a obtener consentimiento sobre algo.
        </Text>
        <Text style={styles.containerText}>
          - Cuando alguien no esá lo suficientemente cuerdo o
          consciente para dar consentimiento no se puede aceptar el consentimiento dado.
        </Text>
        <Text>
          - Aprovecharse de una situación para obtener consentimiento está prohibido.
        </Text>
        <Text style={styles.containerText}>
          - Y lo más importante de todo... Si una persona dice NO, significa NO
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Preguntas 1')}
        >
          <Text style={styles.buttonText}>Evaluar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Guia1;
