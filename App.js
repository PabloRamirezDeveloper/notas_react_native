import React, { useState } from 'react';

import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native';

import Formulario from './src/components/Formulario';

import Nota from './src/components/Nota';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notas, setNotas] = useState([]);

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

      {notas.length === 0 ? <Text style={styles.noHayNotas}>Aún no hay notas </Text> :
        <FlatList
          style = {styles.listado}
          data={notas}
          keyExtractor={item => item.id} //Va a buscar en el arreglo un valor que sea único
          renderItem={({ item }) => { //Es como se nombra al componente que se va a mostrar

            return (
              <Nota
                item={item}
              />
            )
          }}


        />}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        notas={notas}
        setNotas={setNotas}

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
  noHayNotas: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 24
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
}); //Ya que styles se declara como un objeto,
//para aplicar estilos tenemos que declarar
//propiedades dentro del objeto styles.
//Dicha propiedad hará referencia a una propiedad
//y valor en CSS
export default App;
