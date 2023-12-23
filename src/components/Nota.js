import React from 'react';
import {Text, View, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import {formaterFecha} from '../helpers';

//Componente que muestra las notas creadas por el usuario,
//las cuales son guardadas en el arreglo notas. Por medio
//de este componente tambien podemos editar y eliminar una
//nota
const Nota = ({
  item,
  setModalVisible,
  setNota,
  notaEditar,
  notaEliminar,
  setModalNota,
}) => {
  const {titulo, fecha, id} = item;

  return (
    <Pressable
      onPress={() => {
        setModalNota(true);
        setNota(item);
      }}>
      <SafeAreaView style={styles.contenedor}>
        <Text style={styles.label}>Titulo:</Text>
        <Text style={styles.texto}>{titulo}</Text>
        <Text style={styles.fecha}>{formaterFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onPress={() => {
              setModalVisible(true);
              notaEditar(id);
            }}>
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onPress={() => {
              notaEliminar(id);
            }}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#5b4e77ff',
    padding: 20,
    marginBottom: 2,
    borderRadius: 10,
  },
  label: {
    color: '#7cea9cff',
    textTransform: 'uppercase',
    fontWeight: '900',
    marginBottom: 5,
  },
  texto: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
  fecha: {
    color: '#7cea9cff',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#2e5eaaff',
  },
  btnEliminar: {
    backgroundColor: '#374151',
  },
  btnTexto: {
    textTransform: 'uppercase',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12,
  },
});
export default Nota;
