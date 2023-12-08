import React, { useState } from 'react';

import { Modal, Text, StyleSheet, View, TextInput, SafeAreaView, ScrollView, Pressable } from 'react-native';

import DatePicker from 'react-native-date-picker';

const Formulario = ({ modalVisible, setModalVisible }) => {

  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [fecha, setFecha] = useState(new Date());

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
    marginTop: 30,
    color: '#FFF',
    marginBottom: 15

  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginTop: 20,
    marginBottom: 35,
    marginHorizontal: 30,
    backgroundColor: '#7cea9cff',
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#593959ff',
    textAlign: 'center',
    fontSize: 17,
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
    height: 350,
    fontSize: 20
  }
})
export default Formulario;
