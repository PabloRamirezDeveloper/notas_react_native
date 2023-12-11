import React, { useState } from 'react';

import { Modal, Text, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';



const Formulario = ({ modalVisible, setModalVisible, notas, setNotas }) => {

  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [fecha, setFecha] = useState(new Date());

  const handleNota = () => {
    //Validamos el formulario
    if ([titulo, contenido].includes('')) {

      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )
      return //Sirve para que no se ejecute la siguiente 
      //linea del if
    }

    const nuevaNota = {
      id: Date.now(),
      titulo,
      contenido,
      fecha

    }

    setNotas([...notas, nuevaNota]);
    setModalVisible(!modalVisible); //Cerramos la ventana Modal

    setTitulo('');
    setContenido('');
    setFecha(new Date());

  }



  return (
    <Modal
      animationType="slide" //Sirve para ver la animacion de la ventana modal
      visible={modalVisible} //Por medio del prop 'visible' logramos
    //que el componente Modal se muestre o 
    //desaparezca
    >
      <ScrollView style={styles.contenido}>

        <Text style={styles.titulo}>Nueva {''}
          <Text style={styles.tituloBold}>Nota</Text>
        </Text>

        <Pressable
          style={styles.btnCancelar}
          onLongPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
        </Pressable>

        <View style={styles.campo}>
          <TextInput
            style={styles.input}
            placeholder='Titulo...'
            placeholderTextColor='#888'
            value={titulo}
            onChangeText={setTitulo} //Evento que sirve para recibir el valor de lo que el
          //usuario escriba dentro de input

          />
        </View>

        <View style={styles.campo}>
          <TextInput
            style={[styles.input, styles.inputArea]}
            placeholder='Contenido...'
            placeholderTextColor='#888'
            multiline={true}
            numberOfLines={4}
            value={contenido}
            onChangeText={setContenido}
          />
        </View>
        <Pressable
          style={styles.btnNuevaNota}
          onPress={() => handleNota()}
        >
          <Text style={styles.btnNuevaNotaTexto}>Agregar Nota</Text>
        </Pressable>
      </ScrollView>

    </Modal>
  );
};

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
    marginBottom: 5

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
    textTransform: 'uppercase'
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
    marginBottom: 15
  },
  inputArea: {
    textAlignVertical: 'top',
    height: 300,
    fontSize: 20
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
  }
})
export default Formulario;
