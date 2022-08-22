import * as React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar,
} from 'react-native';

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
              <Image style={styles.image} source={require('../../assets/anillo.png')} />

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
              <Image style={styles.image} source={require('../../assets/capuchon.png')} />

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
              <Image style={styles.image} source={require('../../assets/cFemenino.png')} />

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
              <Image style={styles.image} source={require('../../assets/condon.png')} />

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
              <Image style={styles.image} source={require('../../assets/diafragma.png')} />

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
              <Image style={styles.image} source={require('../../assets/espermicida.png')} />

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
              <Image style={styles.image} source={require('../../assets/esponja.png')} />

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
              <Image style={styles.image} source={require('../../assets/inyeccion.png')} />

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
              <Image style={styles.image} source={require('../../assets/parche.png')} />

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
              <Image style={styles.image} source={require('../../assets/pastilla.png')} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Pastilla
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.menu}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image style={styles.iconsMenu} source={require('../../assets/guides.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                    () => navigation.navigate('Condoms')
                }
          >
            <Image style={styles.iconsMenu} source={require('../../assets/preser.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.iconsMenu} source={require('../../assets/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                    () => navigation.navigate('Experts')
                }
          >
            <Image style={styles.iconsMenu} source={require('../../assets/questions.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
                  () => navigation.navigate('Users')
                }
          >
            <Image style={styles.iconsMenu} source={require('../../assets/profile.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Condoms;

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
