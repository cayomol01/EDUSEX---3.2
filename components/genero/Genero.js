import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';



const Genero = ( {navigation} ) => {
    return (
        <>
        <TouchableOpacity 
            onPress = {() => 
              navigation.navigate('nada')
          }>
            <View style={styles.containerE}>
              <Image style={styles.imagenE} source={ require('../.././assets/lE.png' ) } />


              <View style={styles.textdatoE}>
                <Text style={styles.textE}>
                    Experto
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        <View style={styles.container1}><Text style={styles.textoTitulo}>EDUSEX</Text>
        </View>
        <View style={{ flex : 1, justifyContent : 'center', padding : 15 }}>

        <TouchableOpacity 
            onPress = {
              () => navigation.navigate('nada')
          }>
            <View style={styles.container}>
              <Image style={styles.imagen} source={ require('../.././assets/Femenino.png' ) } />


              <View style={styles.textdato}>
                <Text style={styles.text}>
                    FEMENINO
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress = {
              () => navigation.navigate('nada')
          }>
            <View style={styles.container}>
              <Image style={styles.imagen} source={ require('../.././assets/Masculino.png' ) } />


              <View style={styles.textdato}>
                <Text style={styles.text}>
                    MASCULINO
                </Text>
              </View>
            </View>
          </TouchableOpacity>
              
          <TouchableOpacity 
            onPress = {
              () => navigation.navigate('nada')
          }>
            <View style={styles.container}>
              <Image style={styles.imagen} source={ require('../.././assets/Otro.png' ) } />


              <View style={styles.textdato}>
                <Text style={styles.text}>
                   OTRO
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
      marginBottom : 50,
      borderRadius : 15,
      backgroundColor : '#000000',
      overflow : 'hidden',
      
    },
    textoTitulo : {
        marginTop:-50,
        fontWeight : 'bold',
        fontSize : 40,
    
    },
    imagen : {
        width : '100%',
        height : '75%'
      },
    
    imagen1: {
        width : '10%',
        height : '25%'
      },

    textdato : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        color: 'white'
        
    },
    container1: {
        alignItems: 'center',
        justifyContent: 'center',
        width : '100%',
        height : 200,
        marginBottom : -50,
        borderRadius : 15,
        backgroundColor: 'transparent',
        overflow : 'hidden'
      },
      text : {
        fontWeight : 'bold',
        fontSize : 20,
        color: 'white'
      },
      containerE: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 330,
        marginTop:10,
        paddingTop:5,
        width : '15%',
        height : 35,
        borderRadius : 15,
        backgroundColor : '#000000',
        overflow : 'hidden',
        
      },
      imagenE: {
        width : "100%",
        height :"43%"
      },
      textdatoE: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        color: 'white'
      },
      textE: {
        fontWeight : 'bold',
        fontSize : 10,
        color: 'white'
      },

        
});