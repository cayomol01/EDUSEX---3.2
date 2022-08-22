import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';


const Nada = ( {navigation} ) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Anillo Vaginal</Text>
      </View>
      
      </>
  )
}

export default Nada
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
  textTittle : {
    fontWeight : 'bold',
    fontSize : 40
  },
});