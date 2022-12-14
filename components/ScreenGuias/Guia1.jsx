import * as React from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  TouchableOpacity,
} from 'react-native';

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
    fontSize: 15,
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

  menu: {
    width: '100%',
    height: '10%',
    marginTop: 10,
  },

  iconsMenu: {
    marginTop: 10,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    padding: 18,
    marginLeft: 35,
  },
});

function Guia1({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Consentimiento</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView>
          <Text>
            El consentimiento es el permiso que una persona da para
            que se realice una acción. En el contexto de desarrollo
            personal de una persona, lo que se entiende como
            consentimiento es el permiso que una persona da para que
            se realice una acción que involucre su cuerpo o su bienestar.
            {'\n\n'}
            El consentimiento en el ámbito sexual se puede expresar
            de distintas maneras. Como el consentimiento a actos
            sexuales, a afecto físico e incluso a fotos explicitas.
            {'\n\n'}
            Por lo tanto se deben tomar varias cosas en cuenta al
            empezar un acto sexual. Dentro de estas se pueden encontrar:
            {'\n\n'}
            -El consentimiento se puede retirar en cualquier momento
            {'\n\n'}
            - No se debe intentar convencer a obtener consentimiento sobre algo.
            {'\n\n'}
            - Cuando alguien no esá lo suficientemente cuerdo o
            consciente para dar consentimiento no se puede aceptar el consentimiento dado.
            {'\n\n'}
            - Aprovecharse de una situación para obtener consentimiento está prohibido.
            {'\n\n'}
            - Y lo más importante de todo... Si una persona dice NO, significa NO
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Preguntas 1')}
            testID={"PreguntasButton"}
          >
            <Text style={styles.buttonText}>Evaluar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </>
  );
}

export default Guia1;
