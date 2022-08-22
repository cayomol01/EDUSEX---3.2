import * as React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar,
} from 'react-native';

function Experts({ navigation }) {
  return (
    <>
      <View style={styles.containerExperts}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image style={styles.imageInfo} source={require('../../assets/edusexInfo.png')} />
          <Text style={styles.details}>
            EDUSEX
            {'\n'}
            Empieza a consultar
            {'\n'}
            con los profesionales
            {'\n\n'}
            ¡Contáctalos!
          </Text>
        </View>
      </View>
      <View style={styles.containerExpertsWel}>
        <Text style={styles.textWelcome}>Bienvenid@</Text>
      </View>
      <View style={styles.containerDiffExperts}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text style={styles.jobs}>
              Ginecología
              {'\n'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.jobs}>
              Urología
              {'\n'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.jobs}>
              Sexología
              {'\n'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.jobs}>
              Psicología
              {'\n'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerJobs}>
        <ScrollView style={styles.scrollViewJobs}>
          <View style={{ flex: 1, justifyContent: 'center', padding: 15 }}>
            <TouchableOpacity
              onPress={
                        () => navigation.navigate('ScreenExp1')
                    }
            >
              <View style={styles.containerCards}>
                <Image style={styles.imageProfile} source={require('../../assets/fakeprofile.png')} />
                <Text style={styles.detailsInfo}>
                  Dr. Orellana
                  {'\n'}
                  Especialista en: ---
                  {'\n'}
                  Agenda tu consulta
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
                        () => navigation.navigate('Screen1')
                    }
            >
              <View style={styles.containerCards}>
                <Image style={styles.imageProfile} source={require('../../assets/fakeprofile2.png')} />
                <Text style={styles.detailsInfo}>
                  Dr. Sandoval
                  {'\n'}
                  Especialista en: ---
                  {'\n'}
                  Agenda tu consulta
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
                        () => navigation.navigate('Screen1')
                    }
            >
              <View style={styles.containerCards}>
                <Image style={styles.imageProfile} source={require('../../assets/fakeprofile.png')} />
                <Text style={styles.detailsInfo}>
                  Dr. Orellana
                  {'\n'}
                  Especialista en: ---
                  {'\n'}
                  Agenda tu consulta
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
                        () => navigation.navigate('Screen1')
                    }
            >
              <View style={styles.containerCards}>
                <Image style={styles.imageProfile} source={require('../../assets/fakeprofile2.png')} />
                <Text style={styles.detailsInfo}>
                  Dr. Sandoval
                  {'\n'}
                  Especialista en: ---
                  {'\n'}
                  Agenda tu consulta
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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

export default Experts;

const styles = StyleSheet.create({
  containerExperts: {
    width: '90%',
    height: '20%',
    borderRadius: 20,
    marginLeft: 20,
    padding: 20,
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  imageInfo: {
    marginTop: 10,
    width: '50%',
    height: '70%',
    resizeMode: 'contain',
  },

  details: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
    color: '#fff',
  },

  containerExpertsWel: {
    width: '90%',
    height: '7%',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
  },

  textWelcome: {
    fontWeight: 'bold',
    fontSize: 40,
  },

  containerDiffExperts: {
    width: '90%',
    height: '7%',
    borderRadius: 20,
    marginLeft: 20,
    alignItems: 'center',
  },

  jobs: {
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 14,
    padding: 12,
  },

  containerJobs: {
    width: '90%',
    height: '50%',
    borderRadius: 20,
    marginLeft: 20,
    backgroundColor: 'black',
    padding: 15,
    paddingBottom: 30,
    paddingTop: 18,
  },

  scrollViewJobs: {
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    paddingTop: 10,
  },

  containerCards: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#c2dfe3',
    alignItems: 'center',
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
  },

  imageProfile: {
    marginTop: 10,
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: -25,
  },

  detailsInfo: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
    marginLeft: -15,
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
