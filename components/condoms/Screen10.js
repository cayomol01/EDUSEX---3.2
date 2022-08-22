import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView,
} from 'react-native';

function Screen10() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Pastilla Anticonceptiva</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scrollView}>
          <Text>
            Las pastillas anticonceptivas poseen un 99% de efectividad si es que la persona que las consume, las consume de una manera correcta. Al decir de una "manera correcta", se refiere a tomárselas en un horario establecido y sin faltas. Si en dado caso, la persona no las consume de una forma regular, pueden ser 91% efectivas. Estas pastillas contienen hormonas capaces de poder detener el ciclo de ovulación, por lo tanto, el espermatozoide no es capaz de entrar al óvulo.
            {'\n\n'}
            Efectos secundarios...
            {'\n\n'}
            Náuseas, dolores de cabeza, ciclo menstrual irregular, sensibilidad en glándulas mamarias.
            {'\n\n'}
            Es importante recalcar que las pastillas anticonceptivas no previenen enfermedades de transmisión sexual.
            {'\n\n'}
            (Planned Parenthood, 2022)
          </Text>
          <Image style={styles.image} source={require('../../assets/pastillaUse.png')} />
        </ScrollView>
      </View>
    </>
  );
}

export default Screen10;

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
