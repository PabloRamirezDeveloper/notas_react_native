import React, {useState, useEffect} from 'react';

import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';

const Formulario = ({
  modalVisible,
  notas,
  setNotas,
  nota,
  setNota,
  cerrarModalForm,
}) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [id, setId] = useState('');

  useEffect(() => {
    if (Object.values(nota).length > 0) {
      setTitulo(nota.titulo);

      setContenido(nota.contenido);
      setId(nota.id);
    }
  }, [nota]);

  const handleNota = () => {
    //Validamos el formulario
    if ([titulo, contenido].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return; //Sirve para que no se ejecute la siguiente
      //linea del if
    }

    const nuevaNota = {
      titulo,
      contenido,
      fecha,
    };

    //Revisamos por medio del id si es un registro nuevo o
    //si estamos editando

    if (id) {
      // editando una nota
      nuevaNota.id = id;
      const notasActualizadas = notas.map(notaState =>
        notaState.id === nuevaNota.id ? nuevaNota : notaState,
      );

      setNotas(notasActualizadas);

      setNota({});
    } else {
      //agregando una nueva nota

      nuevaNota.id = Date.now();
      setNotas([...notas, nuevaNota]);
    }
    cerrarModalForm();
    setId('');
    setTitulo('');
    setContenido('');
    setFecha(new Date());
  };

  return (
    <Modal
      animationType="slide" //Sirve para ver la animacion de la ventana modal
      visible={modalVisible} //Por medio del prop 'visible' logramos
      //que el componente Modal se muestre o
      //desaparezca
    >
      <ScrollView style={styles.contenido}>
        <SafeAreaView>
          <Text style={styles.titulo}>
            {nota.id ? 'Editar' : 'Nueva'} {''}
            <Text style={styles.tituloBold}>Nota</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => {
              cerrarModalForm();
              setNota({});
              setTitulo('');
              setContenido('');
              setFecha(new Date());
              setId('');
            }}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder="Titulo..."
              placeholderTextColor="#888"
              value={titulo}
              onChangeText={setTitulo} //Evento que sirve para recibir el valor de lo que el
              //usuario escriba dentro de input
            />
          </View>

          <View style={styles.campo}>
            <TextInput
              style={[styles.input, styles.inputArea]}
              placeholder="Contenido..."
              placeholderTextColor="#888"
              multiline={true}
              numberOfLines={4}
              value={contenido}
              onChangeText={setContenido}
            />
          </View>
          <Pressable style={styles.btnNuevaNota} onPress={() => handleNota()}>
            <Text style={styles.btnNuevaNotaTexto}>
              {nota.id ? 'Editar' : 'Agregar'} Nota
            </Text>
          </Pressable>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  );
};

//Por medio del componente StyleSheet creamos la hoja de estilos
//de nuestro componente
const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#593959ff',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    color: '#FFF',
    marginBottom: 5,
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginTop: 15,
    marginBottom: 40,
    marginHorizontal: 30,
    backgroundColor: '#55d6beff',
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#593959ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#5b4e77ff',
    color: '#CCC',
    fontWeight: '900',
    fontSize: 25,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  inputArea: {
    textAlignVertical: 'top',
    height: 300,
    fontSize: 20,
  },
  btnNuevaNota: {
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: '#2e5eaaff',
    marginHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnNuevaNotaTexto: {
    textAlign: 'center',
    color: '#593959ff',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '900',
  },
});
export default Formulario;
