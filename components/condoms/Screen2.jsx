import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView,
} from 'react-native';

const capuchonUseIMG = require('../../assets/capuchonUse.png');

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

function Screen2() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Capuchón Cervical</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scrollView}>
          <Text>
            Para el capuchón cervial existen dos posibles
            tipos de efectividad, una para mujeres que han
            dado a luz y otra para las mujeres que aún no
            han dado a luz. En dado caso, una mujer ya dio a
            luz su efectividad es del 71% mientras que la
            efectividad para una mujer que nunca ha dado a luz
            es del 86%.\n\nEste capuchón se asemeja a una copa
            menstrual, el cuál se introduce por la vagina previniendo
            que el espermatozoide sea capaz de llegar al óvulo.
            Por otra parte, también se puede hacer uso de un
            espermicida para mejorar su efectividad.\n\nEfectos secundarios.
            {'\n\n'}
            Irritación vaginal. Además si se hace uso de espermicida,
            se puede llegar a tener VIH a causa de esta irritación.
            {'\n\n'}
            Es importante recalcar que el capuchón cervical
            no previene enfermedades de transmisión sexual.
            {'\n\n'}
            (Planned Parenthood, 2022)
          </Text>
          <Image style={styles.image} source={capuchonUseIMG} />
        </ScrollView>
      </View>
    </>
  );
}

export default Screen2;
