import React from 'react';
import {Text, View, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import {formaterFecha} from '../helpers';
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
      onLongPress={() => {
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
            onLongPress={() => {
              setModalVisible(true);
              notaEditar(id);
            }}>
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => {
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
    marginBottom: 10,
  },
  texto: {
    color: '#FFF',
    fontSize: 24,
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
    paddingVertical: 5,
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
