import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView,
} from 'react-native';

function Screen9() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Parche Anticonceptivo</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scrollView}>
          <Text>
            Los parches anticopcentivos poseen un 99% de efectividad si es que la persona lo usa de manera correcta. Al decir de una "manera correcta", se refiere a asegurarse de pegarlo bien en la piel y tratar de no tocarlo mucho ya que es bastante sensible con el pegamento que este contiene. Si en dado caso, la persona no lo hace, pueden ser 91% efectivos.
            {'\n\n'}
            El parche anticonceptivo contiene progestina y estrógeno las cuales se encargan de que no ocurra una ovulación. Por otra parte, el cuello uterino produce una especie de moco el cuál se vuelve espeso haciendo así que este no permita la entrada del espermatozoide.
            {'\n\n'}
            Efectos secundarios.
            {'\n\n'}
            Náuseas, dolores de cabeza, ciclo menstrual irregular, sensibilidad en las glándulas mamarias.
            {'\n\n'}
            Es importante recalcar que el parche anticonceptivo no previene enfermedades de transmisión sexual.
            {'\n\n'}
            (Planned Parenthood, 2022)
          </Text>
          <Image style={styles.image} source={require('../../assets/parcheUse.png')} />
        </ScrollView>
      </View>
    </>
  );
}

export default Screen9;

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
