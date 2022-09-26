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
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { useState } from 'react';

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

  containerFilter: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },

  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20
  },

  buttonFilter: {
    width: Dimensions.get('window').width / 3.5,
    height: 40,
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: 10,
    justifyContent: 'center',
    borderColor: '#EBEBEB'
  },

  btnTabActive: {
    backgroundColor: '#c2dfe3'
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
  const [status, setStatus] = useState('Masculino')

  const setStatusFilter = status => {
    if(status != 'Masculino') {
      setFilteredDataSource([...content.filter(e => e.status === status)])
    } else {
      setFilteredDataSource(content)
    }
    setStatus(status)
  }

  // const renderItem = ({ item, index }) => {
  //   return (
  //     <Text
  //       key={index}
  //       style={styles.itemStyle}
  //     >
  //       {item.title}
  //     </Text>
  //   );
  // }

  const listTab = [
    {
      status: "Masculino ",
    },
    {
      status: "Masturbacion",
    },
    {
      status:"Orgasmo",
    }
    
  ]

  const content = [
    {
      title: "Masturbarse es malo para la salud?",
      status: "Masturbacion ",
    },
    {
      title:  "Masturbarse hace que te crezca pelo en las manos?" ,
      status: "Masturbacion ",
    },
    {
      title: "Masturbarse es malo para la salud?",
      status: "Masturbacion",
    },
    {
      title: "¿Las mujeres eyaculan?",
      status:"Orgasmo",
    }
    
  ]

  const searchTags = status => {
    // Check if searched text is not blank
    if (status != setFilteredDataSource.tags) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = {};
      const textUpper = status.toUpperCase();
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
      setSearch(status);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(status);
    }
  };

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

  // eslint-disable-next-line react/no-unstable-nested-components
  function TagsView({ item }) {
    const getItem = (title) => {
      // eslint-disable-next-line no-alert
      alert(`${title}\n${masterDataSource[title].tags}`);
    };

    return (
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}
      >
        {masterDataSource[item].tags}
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
          <SafeAreaView styles={styles.containerFilter}>
            <View style={{ flex: 1, margin: 10, flexDirection: 'row', marginBottom: 45, alignSelf: 'center' }}>
              {
                listTab.map (e => (
                  <TouchableOpacity 
                    style={[styles.buttonFilter, status === e.status && styles.btnTabActive]}
                    onPress={() => setStatusFilter(e.status)}
                  >
                    <Text>{e.status}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </SafeAreaView>
          <FlatList
            data={Object.keys(filteredDataSource)}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
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
