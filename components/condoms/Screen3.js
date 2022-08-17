import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Screen3 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Condón Femenino</Text>
      </View>
      <View style={styles.container2}>
      <ScrollView style={styles.scrollView}>
          <Text>Los condones internos poseen un 79% de efectividad. Si se usa de una manera correcta, ya sea usánsolo durando todo el acto sexual y colocándolo de una forma correcta, ya sea en la vagina o en el ano puede llegar a ser bastante efectivo.{"\n\n"}Los condones internos no poseen efectos secundarios.{"\n\n"}Los condones internos son ideales para evitar el embarazo y la transmisión de enfermedades sexuales.{"\n\n"}(Planned Parenthood, 2022)</Text>
          <Image style={styles.image} source={ require('../.././assets/condonfUse.png' ) } />
      </ScrollView>
      </View>
    </>
  );
}

export default Screen3

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
