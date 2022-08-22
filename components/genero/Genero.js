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
        <View style={styles.container1Menu}><Text style={styles.textoTitulo}>EDUSEX</Text>
        </View>
        <View style={{ flex : 1, justifyContent : 'center', padding : 15 }}>

        <TouchableOpacity 
            onPress = {
              () => navigation.navigate('MenuP')
          }>
            <View style={styles.containerMenu}>
              <Image style={styles.imagenMenu} source={ require('../.././assets/Femenino.png' ) } />


              <View style={styles.textdatoMenu}>
                <Text style={styles.textMenu}>
                    FEMENINO
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress = {
              () => navigation.navigate('MenuP')
          }>
            <View style={styles.containerMenu}>
              <Image style={styles.imagenMenu} source={ require('../.././assets/Masculino.png' ) } />


              <View style={styles.textdatoMenu}>
                <Text style={styles.textMenu}>
                    MASCULINO
                </Text>
              </View>
            </View>
          </TouchableOpacity>
              
          <TouchableOpacity 
            onPress = {
              () => navigation.navigate('MenuP')
          }>
            <View style={styles.containerMenu}>
              <Image style={styles.imagenMenu} source={ require('../.././assets/Otro.png' ) } />


              <View style={styles.textdatoMenu}>
                <Text style={styles.textMenu}>
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
    containerMenu: {
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
    imagenMenu: {
        width : '100%',
        height : '75%'
      },
    
    imagen1Menu:{
        width : '10%',
        height : '25%'
      },

    textdatoMenu : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        color: 'white'
        
    },
    container1Menu: {
        alignItems: 'center',
        justifyContent: 'center',
        width : '100%',
        height : 200,
        marginBottom : -50,
        borderRadius : 15,
        backgroundColor: 'transparent',
        overflow : 'hidden'
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
      imagenE:{
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
      textMenu: {
        fontWeight : 'bold',
        fontSize : 20,
        color: 'white'
      },
      textdatoMenu: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        color: 'white'
      },

        
});