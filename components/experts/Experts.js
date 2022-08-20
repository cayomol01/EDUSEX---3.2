import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';

const Experts = ( {navigation} ) => {
  return (
    <>
        <View style={styles.containerExperts}>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.imageInfo} source={ require('../.././assets/edusexInfo.png') } />
                <Text style={styles.details}>EDUSEX{"\n"}Empieza a consultar{"\n"}con los profesionales            {"\n\n"}¡Contáctalos!</Text>
            </View>
        </View>
    
    </>
  );
}

export default Experts

const styles = StyleSheet.create({
  containerExperts : {
    width: '90%',
    height: '20%',
    borderRadius: 20,
    marginLeft: 20,
    padding: 20,
    marginTop:20,
    backgroundColor: 'black',
    alignItems: 'center'
  },

  imageInfo : {
    marginTop: 10,
    width : '50%',
    height : '70%',
    resizeMode: 'contain'
  },
  
  details: {
    marginTop: 10,
    fontWeight : 'bold',
    fontSize: 14,
    marginBottom: 8,
    color: '#fff'
  }
});
