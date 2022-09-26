import * as React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar,
} from 'react-native';
import NavBar from '../NavBar/navbar'


const anilloIMG = require('../../assets/anillo.png');
const capuchonIMG = require('../../assets/capuchon.png');
const cfemeninoIMG = require('../../assets/cFemenino.png');
const cmasculinoIMG = require('../../assets/condon.png');
const diafragmaIMG = require('../../assets/diafragma.png');
const espermicidaIMG = require('../../assets/espermicida.png');
const esponjaIMG = require('../../assets/esponja.png');
const inyeccionIMG = require('../../assets/inyeccion.png');
const parcheIMG = require('../../assets/parche.png');
const pastillaIMG = require('../../assets/pastilla.png');
const guidesIMG = require('../../assets/guides.png');
const preserIMG = require('../../assets/preser.png');
const homeIMG = require('../../assets/home.png');
const questionsIMG = require('../../assets/questions.png');
const profileIMG = require('../../assets/profile.png');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },

  container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  container3: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 250,
    marginBottom: -50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '70%',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  textTittle: {
    fontWeight: 'bold',
    fontSize: 40,
  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingTop: 10,
  },

  menu: {
    width: '100%',
    height: '10%',
    marginTop: 10,
  },

  iconsMenu: {
    marginTop: 10,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    padding: 18,
    marginLeft: 35,
  },
});

function Condoms({ navigation }) {
  return (
    <>
      <View style={styles.container3}><Text style={styles.textTittle}>PRESERVATIVOS</Text></View>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 15 }}>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen1')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={anilloIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Anillo Vaginal
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen2')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={capuchonIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Capuchón Cervical
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen3')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={cfemeninoIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Condón Femenino
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen4')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={cmasculinoIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Condón Masculino
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen5')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={diafragmaIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Diafragma
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen6')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={espermicidaIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Espermicida y Gel
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen7')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={esponjaIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Esponja Anticonceptiva
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen8')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={inyeccionIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Inyección Anticonceptiva
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen9')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={parcheIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Parche Anticonceptivo
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Screen10')
          }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={pastillaIMG} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Pastilla
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavBar navigation={navigation}/>
    </>
  );
}

export default Condoms;
