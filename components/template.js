import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function template() {
  return (
    <SafeAreaView>
        <Text>Template</Text>
    </SafeAreaView>
  );
}

/* Esto de aca abajo es equivalente al css: */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});