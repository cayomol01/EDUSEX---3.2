/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { useState } from 'react';
import NavBar from '../NavBar/navbar'

const questions = require('./preg.json');
const guidesIMG = require('../../assets/guides.png');
const preserIMG = require('../../assets/preser.png');
const homeIMG = require('../../assets/home.png');
const questionsIMG = require('../../assets/questions.png');
const profileIMG = require('../../assets/profile.png');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 670
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
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

function ItemSeparatorView() {
  return (
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
      }}
    />
  );
}

// eslint-disable-next-line no-unused-vars
export default function Questions({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(questions);
  const [masterDataSource] = useState(questions);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = {};
      const textUpper = text.toUpperCase();
      for (const item in masterDataSource) {
        const itemData = item
          ? item.toUpperCase()
          : ''.toUpperCase();
        if (itemData.indexOf(textUpper) > -1) {
          newData[item] = masterDataSource[item];
        }
        for (const y in masterDataSource[item].tags) {
          const itemData = masterDataSource[item].tags[y]
            ? item.toUpperCase()
            : ''.toUpperCase();
          if (itemData.indexOf(textUpper) > -1) {
            newData[item] = masterDataSource[item];
          }
        }
      }

      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function ItemView({ item }) {
    const getItem = (title) => {
      // eslint-disable-next-line no-alert
      alert(`${title}\n${masterDataSource[title].info}`);
    };

    return (
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}
      >
        {item}
      </Text>
    );
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Duda"
          />
          <FlatList
            data={Object.keys(filteredDataSource)}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </View>
      <NavBar navigation={navigation}/>
    </>
  );
}
