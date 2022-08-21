import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';


const Genero = ( {navigation} ) => {
    return (
        <>
        <View style={styles.container3}><Text style={styles.textTittle}>EDUSEX</Text></View>
        <View style={{ flex : 1, justifyContent : 'center', padding : 15 }}>
        <TouchableOpacity 
            onPress = {
              () => navigation.navigate('nada')
          }>
            <View style={styles.container}>
              <Image style={styles.imagen} source={ require('../.././assets/Femenino.png' ) } />


              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Anillo Vaginal
                </Text>
              </View>
            </View>
          </TouchableOpacity>
              
        </View>

        </>
    );
}
export default Genero
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