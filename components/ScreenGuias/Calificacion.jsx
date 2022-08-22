import * as React from 'react';
import {
  Text,
} from 'react-native';
import { useEffect } from 'react';

function Calificacion({ route }) {
  useEffect(() => {

  }, [route.params?.buenas]);

  return (
    <Text>
      Has obtenido:
      {route.params?.buenas}
      {' '}
      de 5
    </Text>
  );
}

export default Calificacion;
