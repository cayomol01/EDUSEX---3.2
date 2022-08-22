<<<<<<< HEAD:components/template.jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

=======
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function template() {
  return (
    <SafeAreaView>
      <Text>Template</Text>
    </SafeAreaView>
  );
}

>>>>>>> ESTEF-EXPERTOS:components/template.js
/* Esto de aca abajo es equivalente al css: */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
<<<<<<< HEAD:components/template.jsx

export default function template() {
  return (
    <View style={styles}>
      <Text>Template</Text>
    </View>
  );
}
=======
>>>>>>> ESTEF-EXPERTOS:components/template.js
