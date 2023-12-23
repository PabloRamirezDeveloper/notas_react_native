import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Modal,
  SafeAreaView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Formulario from './src/components/Formulario';
import Nota from './src/components/Nota';
import InformacionNota from './src/components/InformacionNota';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notas, setNotas] = useState([]);
  const [nota, setNota] = useState({});
  const [modalNota, setModalNota] = useState(false);

  //useEfect que sirve para obtener los datos guardados en
  //AsyncStorage
  useEffect(() => {
    const obtenerNotas = async () => {

      try {
        const notasStorage = await AsyncStorage.getItem('notas') ?? [];
        setNotas(JSON.parse(notasStorage));
      } catch (error) {
        console.log(error)
      }
    }
    obtenerNotas();
  }, [])


  //UseEffect para guardar los datos en AsyncStorage
  useEffect(() => {
    const almacenarNotas = async () => {
      try {
        await AsyncStorage.setItem('notas', JSON.stringify(notas));
      } catch (error) {
        console.log(error);
      }
    }
    almacenarNotas();
  }, [notas])



  //Funcion que sirve llenar el objeto nota, para que luego pueda
  //ser editado
  const notaEditar = id => {
    const notaEditar = notas.filter(nota => nota.id === id);
    setNota(notaEditar[0]);
  };

  //Funcion que sirve para eliminar una nota en base a su id
  const notaEliminar = id => {
    Alert.alert(
      '¿Deseas eliminar la nota?',
      'La nota eliminada no se podrá recuperar',
      [
        { text: 'Cancelar' },
        {
          text: 'Si, Eliminar',
          onPress: () => {
            const notasActualizadas = notas.filter(nota => nota.id !== id);
            setNotas(notasActualizadas);
          },
        },
      ],
    );
  };
  const cerrarModalForm = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
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

      {notas.length === 0 ? (
        <Text style={styles.noHayNotas}>Aún no hay notas </Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={notas}
          keyExtractor={item => item.id} //Va a buscar en el arreglo un valor que sea único
          renderItem={({ item }) => {
            //Es como se nombra al componente que se va a mostrar

            return (
              <Nota
                item={item}
                setModalVisible={setModalVisible}
                setNota={setNota}
                notaEditar={notaEditar}
                notaEliminar={notaEliminar}
                setModalNota={setModalNota}
              />
            );
          }}
        />
      )}

      {modalVisible && (
        <Formulario
          cerrarModalForm={cerrarModalForm}
          modalVisible={modalVisible}
          notas={notas}
          setNotas={setNotas}
          nota={nota}
          setNota={setNota}
        />
      )}

      <Modal visible={modalNota} animationType="fade">
        <InformacionNota
          nota={nota}
          setNota={setNota}
          setModalNota={setModalNota}
        />
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55d6beff',
    flex: 1, //React Native usa por defecto flex-direction: column
    paddingTop: 50,
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
    marginTop: 20,
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
    fontSize: 24,
  },
  listado: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 30,
  },
}); //Ya que styles se declara como un objeto,
//para aplicar estilos tenemos que declarar
//propiedades dentro del objeto styles.
//Dicha propiedad hará referencia a una propiedad
//y valor en CSS
export default App;
