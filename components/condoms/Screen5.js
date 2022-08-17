import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Screen5 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Diafragma</Text>
      </View>
      <View style={styles.container2}>
      <ScrollView style={styles.scrollView}>
          <Text>El diafragma posee un 94% de efectividad si es que las personas lo usan de manera correcta. Al decir de una "manera correcta", se refiere a usarlo de principio a fin durante las relaciones sexuales, entonces puede llegar a ser solamente 88% efectivo. Se hace un mejor uso del diagrama si se le aplica espermicida. Por otra parte, hay que asegurarse que este cubra todo el cuello uterino, introduciéndolo con la copa para abajo. Cuando este se retira, se introducen los dedos dentro de la vagina para buscar el anillo que trae el diafragma y así poder tirar de él suavemente.{"\n\n"}Efectos secundarios.{"\n\n"}Infecciones urinarias si se utiliza de forma continua. Además si se hace uso de espermicida, se puede tener irritación o inluso llegar a tener VIH a causa de esta irritación.{"\n\n"}Es importante recalcar que el diafragma no previene enfermedades de transmisión sexual.{"\n\n"}(Planned Parenthood, 2022)</Text>
          <Image style={styles.image} source={ require('../.././assets/diafragmaUse.png' ) } />
      </ScrollView>
      </View>
    </>
  );
}

export default Screen5

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : 150,
    marginBottom : -50,
    borderRadius : 15,
    backgroundColor : '#FFFFFF',
    overflow : 'hidden'
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : '100%',
    padding: 30,
    borderRadius : 15,
    backgroundColor : '#FFFFFF'
  },

  textTittle : {
    fontWeight : 'bold',
    fontSize : 40
  },

  image : {
    width : '100%',
    height : '70%'
  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingTop: 10
  }
});
