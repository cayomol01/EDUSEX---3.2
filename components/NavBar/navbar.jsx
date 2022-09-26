import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

const guidesIMG = require('../../assets/guides.png');
const preserIMG = require('../../assets/preser.png');
const homeIMG = require('../../assets/home.png');
const questionsIMG = require('../../assets/questions.png');
const profileIMG = require('../../assets/profile.png');

const styles = StyleSheet.create({
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

function NavBar({ navigation }) {
  return (
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
  );
}

export default NavBar;
