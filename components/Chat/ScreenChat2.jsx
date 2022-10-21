/* eslint-disable react/jsx-props-no-spreading */

import { View, ScrollView, TextInput, StyleSheet, Button, Text} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '../../firebase';

const db = firebase.firestore();

function Bubble({user,text,date}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: 'blue', height: 'auto', flex:0.04, marginLeft:'2vw'}}></View>
            <View style={{backgroundColor: 'red', height: 'auto', marginLeft:'2vw', flex:0.9, paddingBottom:'3%'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: '20px', fontWeight:'bold', fontFamily:'verdana'}}>{user}</Text>
                    <Text style={{marginLeft:'1vw'}}>{date}</Text>
                </View>
                <Text style={{fontSize: '20px', fontFamily:'verdana'}}>{text}</Text>
            </View>
        </View>
    );
}


function ScreenChat2() {
    const [text, onChangeText] = React.useState('')

    const sendAction = () => (
        console.log((new Date()).toDateString())
    );

    return (
        <>
            <ScrollView>
                <Bubble text={"Memes"} user={"MrMemes"} date={"A"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>
                <Bubble text={"Meme2"} user={"Lucida"}/>


            </ScrollView>
            <View style={{height:'1vh'}}></View>
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
                        onPress={sendAction}/>
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
