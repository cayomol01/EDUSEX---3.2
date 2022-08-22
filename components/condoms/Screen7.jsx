import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView,
} from 'react-native';

const esponjaUseIMG = require('../../assets/esponjaUse.png');

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

function Screen7() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Esponja Anticonceptiva</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scrollView}>
          <Text>
            La esponja anticonceptiva tiene una efectividad
            bastante alta si se usa de forma correcta. Aunque
            en este caso, existen dos posibles tipos de efectividad,
            una para mujeres que han dado a luz y otra para las
            mujeres que aún no han dado a luz. En dado caso, una
            mujer ya dio a luz su efectividad es del 76% mientras
            que la efectividad para una mujer que nunca ha dado a
            luz es del 88%. Esta esponja se coloca en el cuello
            uterino de la vagina y a veces puede contener espermicidas.
            {'\n\n'}
            Efectos secundarios.
            {'\n\n'}
            Síndrome de Shock Tóxico (infecciones bacterianas).
            Además si se hace uso de espermicida, se puede tener
            irritación o inluso llegar a tener VIH a causa de esta irritación.
            {'\n\n'}
            Las esponjas anticonceptivas por sí solas no son
            capaces de prevenir enfermedades de transmisión sexual.
            Sin embargo, si se usa junto con un condón, este puede ayudar a prevenirlas.
            {'\n\n'}
            (Planned Parenthood, 2022)
          </Text>
          <Image style={styles.image} source={esponjaUseIMG} />
        </ScrollView>
      </View>
    </>
  );
}

export default Screen7;
