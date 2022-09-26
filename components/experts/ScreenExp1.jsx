import * as React from 'react';
import {
  Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const fakeprofileIMG = require('../../assets/fakeprofile.png');
const nextIMG = require('../../assets/next.png');
const guidesIMG = require('../../assets/guides.png');
const preserIMG = require('../../assets/preser.png');
const homeIMG = require('../../assets/home.png');
const questionsIMG = require('../../assets/questions.png');
const profileIMG = require('../../assets/profile.png');

const styles = StyleSheet.create({
  containerDr: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 290,
    marginTop: -30,
    borderRadius: 15,
    backgroundColor: '#ffff',
  },

  containerDr2: {
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

  containerDr3: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '37.5%',
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
    marginTop: -40,
  },

  imageProfileDr: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: 30,
  },

  containerQ: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#c2dfe3',
    alignItems: 'center',
    marginTop: 15,
    display: 'grid',
    justifyItems: 'center'
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
    fontSize: "1.7vh",
    marginBottom: 5,
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

  containerPoints: {
    width: '100%',
    height: '15%',
    backgroundColor: '#fff',
    marginTop: -30,
  },

  viewContainerPoints: {
    flex: 1,
  },
});

function ScreenExp1({ route, navigation }) {

  const {name,details} = route.params;

  return (
    <>
      <View style={styles.containerDr}>
        <Image style={styles.imageProfileDr} source={require('../../assets/'+details.img)} />
      </View>
      <View style={styles.containerDr2}>
        <Text style={styles.textTittleDr}>{name}</Text>
      </View>
      <View style={styles.containerPoints}>
        <ScrollView style={styles.viewContainerPoints}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: -20 }}>
            <AirbnbRating
              count={5}
              reviews={[
                'Terrible',
                'Malo',
                'Okay',
                'Bueno',
                'Excelente',
              ]}
              defaultRating={3}
              size={15}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.containerDr3}>
        <ScrollView style={styles.scrollView}>
          <Text>
            {details.Desc}
          </Text>
          <Text>
            {"\n"}
            Teléfono: {details.phone}
            {'\n\n'}
            Correo electrónico: {details.mail}
            {'\n\n'}
            Dirección: {details.Direccion}
          </Text>
        </ScrollView>
          <TouchableOpacity style={{width: "80%"}}onPress={() => navigation.navigate('Screen1')}>
            <View style={styles.containerQ}>
              <Text style={styles.detailsQ}>Contactar</Text>
            </View>
          </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity>
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
                  () => navigation.navigate('Rating')
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
