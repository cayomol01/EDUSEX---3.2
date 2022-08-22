import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Esto de aca abajo es equivalente al css: */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function template() {
  return (
    <View style={styles}>
      <Text>Template</Text>
    </View>
  );
}
