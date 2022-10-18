/* eslint-disable react/jsx-props-no-spreading */

import { View, ScrollView, TextInput, StyleSheet, Button, Text} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '../../firebase';

const db = firebase.firestore();

function Bubble({user,text,date}) {
    return (
        <View style={{backgroundColor: 'red', height: '100px'}}>
            <Text>{text}</Text>
        </View>
    );
}


function ScreenChat2() {
    const [text, onChangeText] = React.useState(null)

    return (
        <>
            <ScrollView>
                <Bubble text={"Meme"}/>
                <Bubble text={"Meme2"}/>
            </ScrollView>
            <View style={styles.bottom_row}>
                <View style={{backgroundColor: 'blue', flex: 0.8}}>
                    <TextInput style={styles.input}
                               onChangeText={onChangeText}
                               value={text}
                               placeholder={'Escribe tu Mensaje...'}/>
                </View>
                <View style={{backgroundColor: 'red', flex: 0.20, marginRight: '10px'}}>
                    <Button
                        title={"Enviar"}
                        onPress={() => console.log("A")}/>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bottom_row:{
        width: '100%',
        height: '10%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        height: '5vh',
        width: '95%',
        margin: '10px',
        padding: '10px',
        backgroundColor: 'white',


    }
})


export default ScreenChat2;
