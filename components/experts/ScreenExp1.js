import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const ScreenExp1 = ( {navigation} ) => {
  return (
    <>
      <View style={styles.containerDr}>
        <Image style={styles.imageProfileDr} source={ require('../.././assets/fakeprofile.png') } />
      </View>
      <View style={styles.containerDr2}>
        <Text style={styles.textTittleDr}>Dr. Orellana</Text>
      </View>
      <View style={styles.containerPoints}>
        <ScrollView style={styles.viewContainerPoints}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: -20}}>
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
            <Text>El Dr. Orellana es un ginecólogo altamente cualificado y con experiencia que ofrece un trato totalmente personalizado y de calidad a sus pacientes.</Text>
            <Text>{"\n\n"}Teléfono: ####-####{"\n\n"}Correo electrónico: ---@gmail.com{"\n\n"}Dirección{"\n\n"}6a. Ave. 6-63 zona 10 Edificio Sixtino 1, Nivel 10, Oficina 1004{"\n\n"}(Parqueo adentro del Edificio Sixtino 1)</Text>
            <TouchableOpacity 
                onPress = {
                () => navigation.navigate('Login2')
            }>
                <View style={styles.containerQ}>
                    <Text style={styles.detailsQ}>Realiza tus preguntas :)</Text>
                    <Image style={styles.imageQ} source={ require('../.././assets/next.png') } />
                </View>
            </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.menu}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/guides.png') } />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {
                    () => navigation.navigate('Condoms')
                }>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/preser.png') } />
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {
                  () => navigation.navigate('Rating')
                }>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/home.png') } />
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {
                    () => navigation.navigate('Experts')
                }>
                <Image style={styles.iconsMenu} source={ require('../.././assets/questions.png') } />
                    </TouchableOpacity>
                <TouchableOpacity
                  onPress = {
                  () => navigation.navigate('Users')
                }>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/profile.png') } />
                </TouchableOpacity>
            </View>
        </View>
    </>
  );
}

export default ScreenExp1

const styles = StyleSheet.create({
  containerDr: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : 290,
    marginTop: -30,
    borderRadius : 15,
    backgroundColor : '#ffff'
  },

  containerDr2: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : 150,
    marginTop: -30,
    marginBottom : -50,
    borderRadius : 15,
    backgroundColor : '#FFFFFF',
    overflow : 'hidden'
  },

  containerDr3: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : '37.5%',
    marginTop: -30,
    padding: 30,
    borderRadius : 15,
    backgroundColor : '#FFFFFF'
  },

  textTittleDr : {
    fontWeight : 'bold',
    fontSize : 40,
    marginTop: -50
  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingTop: 10,
    marginTop: -40
  },

  imageProfileDr : {
    width : '50%',
    height : '100%',
    resizeMode: 'contain',
    marginLeft: -25,
    marginTop:30
  },

  containerQ : {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#c2dfe3',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    flex: 1, 
    flexDirection: 'row'
  },

  imageQ : {
    marginTop: -1,
    width : '50%',
    height : '100%',
    resizeMode: 'contain',
    marginRight: -50
  },
  
  detailsQ: {
    fontWeight : 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 15
  },

  menu: {
    width: '100%',
    height: '10%',
    marginTop: 10
  },

  iconsMenu: {
    marginTop: 10,
    width : '50%',
    height : '50%',
    resizeMode: 'contain',
    padding: 18,
    marginLeft: 35
  },

  containerPoints: {
    width: '100%',
    height: '15%',
    backgroundColor: '#fff',
    marginTop: -30
  },
  
  viewContainerPoints: {
    flex: 1
  }
});
