import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Screen6 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Espermicida y Gel</Text>
      </View>
      <View style={styles.container2}>
      <ScrollView style={styles.scrollView}>
          <Text>El espermicida y gel posee un 72% de efectividad. Este método anticonceptivo es mejor si se utiliza con otro método anticonceptivo para tener una mayor seguridad en evitar un embarazo. Este se puede colocar dentro de la vagina o de algún método anticonceptivo y así evita la entrada de espermatozoides al óvulo.{"\n\n"}Efectos secundarios.{"\n\n"}Irritación vaginal. Además se puede llegar a tener VIH a causa de esta irritación.{"\n\n"}Es importante recalcar que el espermicida y gel no previene enfermedades de transmisión sexual.{"\n\n"}(Planned Parenthood, 2022)</Text>
          <Image style={styles.image} source={ require('../.././assets/espermicidaUse.png' ) } />
      </ScrollView>
      </View>
    </>
  );
}

export default Screen6

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : 150,
    marginBottom : -50,
    borderRadius : 15,
    backgroundColor : '#FFFFFF',
    overflow : 'hidden'
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : '100%',
    padding: 30,
    borderRadius : 15,
    backgroundColor : '#FFFFFF'
  },

  textTittle : {
    fontWeight : 'bold',
    fontSize : 40
  },

  image : {
    width : '100%',
    height : '70%'
  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingTop: 10
  }
});
