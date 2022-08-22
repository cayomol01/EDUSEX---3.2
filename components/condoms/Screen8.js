import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView,
} from 'react-native';

function Screen8() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Inyección Anticonceptiva</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scrollView}>
          <Text>
            La inyección anticonceptiva posee un 99% de efectividad. Esta inyección se coloca en un tiempo estimado de 3 meses, por lo que se tiene que tener un control para evitar retrasos al momento de colocarla. Por otra parte, esta inyección también contiene una hormona encargada de prevenir el ciclo de ovuluación, haciendo así que se evite que el espermatozoide pueda ingresar al óvulo.
            {'\n\n'}
            Efectos secundarios.\n\nNáuseas, aumento de peso, ciclo menstrual irregular, sensibilidad en las glándulas mamarias.
            {'\n\n'}
            Es importante recalcar que la inyección anticonceptiva no previene enfermedades de transmisión sexual.
            {'\n\n'}
            (Planned Parenthood, 2022)
          </Text>
          <Image style={styles.image} source={require('../../assets/inyeccionUse.png')} />
        </ScrollView>
      </View>
    </>
  );
}

export default Screen8;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    marginBottom: -50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 30,
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
});
