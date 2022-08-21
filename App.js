import { StyleSheet } from 'react-native';
import MainStack from './navigation/MainStack.js';


export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <StatusBar style="auto" />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <MainStack></MainStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
