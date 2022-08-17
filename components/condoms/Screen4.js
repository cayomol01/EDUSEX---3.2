import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Screen4 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Condón Masculino</Text>
      </View>
      <View style={styles.container2}>
      <ScrollView style={styles.scrollView}>
          <Text>Los condones poseen un 98% de efectividad si es que las personas lo usan de manera correcta. Al decir de una "manera correcta", se refiere a usarlo de principio a fin durante las relaciones sexuales. Existen posibilidades en donde este se pueda llegar a romper, entonces pueden llegar a ser solamente 85% efectivos. Los condones se colocan en el pene  y son capaces de retener el esperma al momento de la eyaculación, haciendo así que este no tenga acceso a la vagina.{"\n\n"}Los condones no poseen efectos secundarios.{"\n\n"}Los condones son ideales para evitar el embarazo y la transmisión de enfermedades sexuales.{"\n\n"}(Planned Parenthood, 2022)</Text>
          <Image style={styles.image} source={ require('../.././assets/condonUse.png' ) } />
      </ScrollView>
      </View>
    </>
  );
}

export default Screen4

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
