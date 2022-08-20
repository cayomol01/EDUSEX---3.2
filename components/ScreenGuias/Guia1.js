import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Screen1 = ( {navigation} ) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Anillo Vaginal</Text>
      </View>
      <View style={styles.container2}>
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