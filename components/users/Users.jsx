import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,
} from 'react-native';

const fondoProfileIMG = require('../../assets/fondoProfile.png');
const femalePIMG = require('../../assets/femaleP.png');
const nextIMG = require('../../assets/next.png');
const guidesIMG = require('../../assets/guides.png');
const preserIMG = require('../../assets/preser.png');
const homeIMG = require('../../assets/home.png');
const questionsIMG = require('../../assets/questions.png');
const profileIMG = require('../../assets/profile.png');

const styles = StyleSheet.create({
  containerP: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 150,
    marginTop: -130,
    marginLeft: 40,
    marginRight: 50,
    borderRadius: 15,
    backgroundColor: '#ffff',
  },

  containerP2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    marginTop: -30,
    marginBottom: -50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  containerP3: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    marginTop: -30,
    padding: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },

  textTittleDr: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: -50,
  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingTop: 10,
  },

  imageP: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    marginLeft: -10,
    marginTop: -30,
  },

  containerU: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#c2dfe3',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
  },

  imageQ: {
    marginTop: -1,
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    marginRight: -50,
  },

  detailsQ: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 15,
  },

  detailsQ1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 80,
  },

  detailsQ2: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 30,
  },

  detailsQ3: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 105,
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

  containerFondoP: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    borderRadius: 15,
  },

  imageProfile: {
    width: '100%',
    height: '100%',
  },
});

function ScreenExp1({ navigation }) {
  return (
    <>
      <View style={styles.containerFondoP}>
        <Image style={styles.imageProfile} source={fondoProfileIMG} />
      </View>
      <View style={styles.containerP}>
        <Image style={styles.imageP} source={femalePIMG} />
      </View>
      <View style={styles.containerP2}>
        <Text style={styles.textTittleDr}>Tu Perfil 🌸</Text>
      </View>
      <View style={styles.containerP3}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            onPress={
                () => navigation.navigate('Experts')
            }
          >
            <View style={styles.containerU}>
              <Text style={styles.detailsQ}>Realiza tus preguntas :)</Text>
              <Image style={styles.imageQ} source={nextIMG} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                () => navigation.navigate('Screen1')
            }
          >
            <View style={styles.containerU}>
              <Text style={styles.detailsQ1}>Guardado :)</Text>
              <Image style={styles.imageQ} source={nextIMG} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                () => navigation.navigate('Screen1')
            }
          >
            <View style={styles.containerU}>
              <Text style={styles.detailsQ2}>Invita a un amigo :)</Text>
              <Image style={styles.imageQ} source={nextIMG} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                () => navigation.navigate('Screen1')
            }
          >
            <View style={styles.containerU}>
              <Text style={styles.detailsQ3}>Ayuda :)</Text>
              <Image style={styles.imageQ} source={nextIMG} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={
                    () => navigation.navigate('Guias')
                }
          >
            <Image style={styles.iconsMenu} source={guidesIMG} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                    () => navigation.navigate('Condoms')
                }
          >
            <Image style={styles.iconsMenu} source={preserIMG} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                    () => navigation.navigate('MenuP')
                }
          >
            <Image style={styles.iconsMenu} source={homeIMG} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                    () => navigation.navigate('Experts')
                }
          >
            <Image style={styles.iconsMenu} source={questionsIMG} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                  () => navigation.navigate('Users')
                }
          >
            <Image style={styles.iconsMenu} source={profileIMG} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default ScreenExp1;
