import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    TextInput,
    FlatList
} from 'react-native';
import {useEffect, useState} from "react";
import './preg.json'

export default function Questions({navigation}){
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(require('./preg.json'));
    const [masterDataSource, setMasterDataSource] = useState(require('./preg.json'));

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = {}
            text = text.toUpperCase()
            for (let item in masterDataSource){
                console.log(item)
                const itemData = item
                    ? item.toUpperCase()
                    : ''.toUpperCase();
                if (itemData.indexOf(text) > -1){
                    console.log(item.indexOf(text) > -1)
                    newData[item] = masterDataSource[item]
                    console.log(newData)
                }
                for (let y in masterDataSource[item]["tags"]){
                    const itemData = masterDataSource[item]["tags"][y]
                        ? item.toUpperCase()
                        : ''.toUpperCase();
                    if (itemData.indexOf(text) > -1){
                        newData[item] = masterDataSource[item]
                        console.log(newData)
                    }
                }
            }
            console.log("A",newData)
            setFilteredDataSource(newData);
            console.log("B",filteredDataSource)
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({item}) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert(item + '\n' + masterDataSource[item].info);
    };

    return (
        <View style={{flex: 1}}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
});
