/* eslint-disable react/jsx-props-no-spreading */

import { View, ScrollView, TextInput, StyleSheet, Button, Text} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { doc, setDoc } from "firebase/firestore";
import firebase from '../../firebase';

const db = firebase.firestore();

function Bubble({user,text,date}) {
    let linecolor = '#7585ff';
    if (user === 'drollana3214as') {
        linecolor = '#e96590'
    }

    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: linecolor, height: 'auto', flex:0.035, marginLeft:'2vw'}}></View>
            <View style={{height: 'auto', marginLeft:'2vw', flex:0.9, paddingBottom:'4%'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: '20px', fontWeight:'bold', fontFamily:'verdana', color:linecolor}}>{user}</Text>
                    <Text style={{marginLeft:'1vw'}}>{date}</Text>
                </View>
                <Text style={{fontSize: '20px', fontFamily:'verdana'}}>{text}</Text>
            </View>
        </View>
    );
}

function ScreenChat2({usuario}) {
    const [text, onChangeText] = React.useState('')

    const [messageboard, setMessageboard] = React.useState([])

    useEffect(() => {
        firebase.firestore().collection('drollana3214as').onSnapshot((snapshot) => {
            const newInfo = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setMessageboard(newInfo)
        });
    }, []);

    const sendAction = async () => {
        const muser = 'uwuario'
        const mtext = text
        const mdate = new Date()
        const message = {
            user: muser,
            text: mtext,
        }
        onChangeText("")
        //console.log(messageboard)
        await setDoc(doc(db, "drollana3214as", mdate.getTime().toString()), {
            user: muser,
            text: mtext,
            date: mdate
        })
        //messageboard.map((x)=> (console.log(x.date.toDate().toDateString())))
    };

    return (
        <>
            <ScrollView>
                {messageboard.map((x) => (
                    <Bubble user={x.user} text={x.text} date={x.date.toDate().toDateString()}/>
                ))}
            </ScrollView>
            <View style={{height:'1vh'}}></View>
            <View style={styles.bottom_row}>
                <View style={{backgroundColor: '#e6f4f1', flex: 0.8}}>
                    <TextInput style={styles.input}
                               onChangeText={onChangeText}
                               value={text}
                               placeholder={'Escribe tu Mensaje...'}/>
                </View>
                <View style={{flex: 0.20, marginRight: '10px'}}>
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
        backgroundColor: '#e6f4f1',
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
