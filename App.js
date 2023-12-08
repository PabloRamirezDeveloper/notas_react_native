import React, { useState } from 'react';

import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';

import Formulario from './src/components/Formulario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de {''}
        <Text style={styles.tituloBold}>Notas</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)} //Por medio del arrow
        //function esperamos que suceda el evento para luego modificar
        //el state
        style={styles.btnNuevaNota}>
        <Text style={styles.btnTextoNuevaNota}>Nueva Nota</Text>
      </Pressable>

      <Formulario 
          modalVisible={modalVisible} 
          setModalVisible = {setModalVisible}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55d6beff',
    flex: 1, //React Native usa por defecto flex-direction: column
    paddingTop: 30
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#593959ff',
  },
  btnNuevaNota: {
    backgroundColor: '#593959ff',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20, //En RN no existen shothands. Para ajustar los margenes de iz y der su
    //se usa la propiedad marginHorizontal
    borderRadius: 10,
  },
  btnTextoNuevaNota: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
}); //Ya que styles se declara como un objeto,
//para aplicar estilos tenemos que declarar
//propiedades dentro del objeto styles.
//Dicha propiedad hará referencia a una propiedad
//y valor en CSS
export default App;
