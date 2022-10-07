/* eslint-disable react/jsx-props-no-spreading */

import { View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '../../firebase';

const db = firebase.firestore();

function ScreenChat() {
  const [messagesprop, setMessagesprop] = useState([]);
  useEffect(() => {
    firebase.firestore().collection('drollana3214as').onSnapshot((snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(newInfo);

      setMessagesprop([
        {
          _id: 2,
          text: 'Escribe tu duda, te contestare lo antes posible',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: ' Username2',
            avatar: 'https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg',
          },
        },
      ].concat(newInfo));
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessagesprop((previousMessages) => GiftedChat.append(previousMessages, messages));
    messages[0].createdAt = String(messages[0].createdAt);
    db.collection('drollana3214as').add(messages[0]);
    // console.log('Mensaje enviado con exito');
  }, []);
  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <MaterialCommunityIcons
          name="send-circle"
          size={42}
          color="#c2dfe3"
        />
      </View>
    </Send>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#c2dfe3',
        },
      }}
      textStyle={{
        right: {
          color: 'black',
        },
      }}
    />
  );

  const scrollToBottomComponent = () => (
    <FontAwesome name="angle-double-down" size={22} color="black" />
  );

  return (
    <GiftedChat
      messages={messagesprop}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}

export default ScreenChat;
