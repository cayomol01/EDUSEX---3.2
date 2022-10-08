import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import NavBar from '../NavBar/navbar';

const questions = require('./preg.json');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 670,
  },
  itemStyle: {
    padding: 49,
    backgroundColor: '#c2dfe3',
    margin: 20,
    fontWeight: 'bold',
    borderColor: '#009688',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
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
  Ilogin: {
    marginTop: 10,
    width: '100%',
    height: '35%',

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

        const itemData = item.toUpperCase().slice(1,-1)

        if (itemData.indexOf(textUpper) > -1) {
          newData[item] = masterDataSource[item];
        }
        for (const y in masterDataSource[item].tags) {
          const itemData2 = masterDataSource[item].tags[y].toUpperCase()
          if (itemData2.indexOf(textUpper) > -1) {
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
      console.log(`${title}\n${masterDataSource[title].info}`);
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
            placeholder="¿Cuál es tu duda?"
          />
          <FlatList
            data={Object.keys(filteredDataSource)}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </View>
      <NavBar navigation={navigation} />
    </>
  );
}
