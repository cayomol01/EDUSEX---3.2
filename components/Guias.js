import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, Button} from 'react-native';



const Data = [
    {
        id: 1,
        title: 'Guia 1',
    },
    {
        id: 2,
        title: 'Guia 2',
    },
    {
        id: 3,
        title: 'Guia 3',
    },
    {
        id: 4,
        title: 'Guia 4',
    },
    {
        id: 5,
        title: 'Guia 5',
    }
]

const Separator = () => (
    <View style={styles.separator} />
  );

const Item = ({ title }) => (

    <View style = {styles.prueba}>
        <Button
            title={title}
            color='#f9c2ff'
            onPress={() => console.log('Simple Button pressed')}
        >
        </Button>
    </View>
    );
  
const Guias = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

/* Esto de aca abajo es equivalente al css: */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
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
    button:{
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
        paddingRight: 16,
        paddingLeft: 16,
        alignItems: 'center',

    },
    prueba:
    {
     width: "90%", margin: 10,
    }
  });

export default Guias;