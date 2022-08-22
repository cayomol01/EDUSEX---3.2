import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  nav: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 250,
    marginBottom: -50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  navTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#dd7973',
    padding: 20,
    paddingRight: 16,
    paddingLeft: 16,
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
});

const stylesprueba = StyleSheet.create({
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
});

const Data = [
  {
    id: 1,
    title: 'Guia 1',
    route: 'Guia 1',

  },
  {
    id: 2,
    title: 'Guia 2',
    route: 'Guia 2',
  },
  {
    id: 3,
    title: 'Guia 3',
    route: 'Guia 3',
  },
  {
    id: 4,
    title: 'Guia 4',
    route: 'Guia 4',
  },
  {
    id: 5,
    title: 'Guia 5',
    route: 'Guia 5',
  },
];

function Guias({ navigation }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function Item({ title, ruta }) {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => navigation.navigate(ruta)}
      >
        <View style={stylesprueba.textContainer}>
          <Text style={styles.buttonText}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} ruta={item.route} />
  );

  return (
    <>
      <View style={styles.navTitle}><Text style={styles.navTitle}>Guias</Text></View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>

  );
}

export default Guias;
