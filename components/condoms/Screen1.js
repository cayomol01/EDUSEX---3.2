import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Screen1 = ( {navigation} ) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Anillo Vaginal</Text>
      </View>
      <View style={styles.container2}>
      <ScrollView style={styles.scrollView}>
          <Text>Los anillos anticonceptivos poseen un 99% de efectividad si es que la persona lo usa de manera correcta. Al decir de una "manera correcta", se refiere a ponerlo de forma correcta en la vagina. Si en dado caso, la persona no lo hace, pueden ser 91% efectivos. El anillo vaginal se puede utilizar 24/7 y este es capaz de liberar hormonas haciendo que la mujer sea incapaz de quedar embarazada.{"\n\n"}Efectos secundarios.{"\n\n"}Náuseas, dolores de cabeza, ciclo menstrual irregular, sensibilidad en las glándulas mamarias.Es importante recalcar que el anillo vaginal no previene enfermedades de transmisión sexual.{"\n\n"}(Planned Parenthood, 2022)</Text>
          <Image style={styles.image} source={ require('../.././assets/anilloUse.png' ) } />
      </ScrollView>
      </View>
    </>
  );
}

export default Screen1

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
