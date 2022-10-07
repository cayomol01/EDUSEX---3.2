import * as React from 'react';
import {
  Text,
} from 'react-native';
import { useEffect } from 'react';

function Calificacion({ route }) {
  useEffect(() => {

  }, [route.params?.correctas]);

  return (
    <Text>
      Has obtenido:
      {' '}
      {route.params?.correctas}
      {' '}
      de 5
    </Text>
  );
}

export default Calificacion;
