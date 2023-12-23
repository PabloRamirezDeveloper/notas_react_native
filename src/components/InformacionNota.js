import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { formaterFecha } from '../helpers';

//Este componente sirve para mostrar el resumen de una nota
//en un componente modal al ejecutarse el evento onPress
const InformacionNota = ({ nota, setNota, setModalNota }) => {

  return (
    <ScrollView style={styles.contenedor}>
      <SafeAreaView >
        <Text style={styles.cabecera}>
          Resumen {''}
          <Text style={styles.cabeceraBold}>Nota</Text>
        </Text>

        <View>
          <Pressable
            onPress={() => {
              setModalNota(false);
              setNota({});
            }}
            style={styles.btnCerrar}>
            <Text style={styles.btnCerrarTexto}>x Cerrar</Text>
          </Pressable>
        </View>

        <View style={styles.resumen}>
          <View style={styles.campo}>
            <Text style={styles.label}>Titulo:</Text>
            <Text style={styles.valor}>{nota.titulo} </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Contenido:</Text>
            <Text style={[styles.valor, styles.contenido]}>
              {nota.contenido}{' '}
            </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.valor}>{formaterFecha(nota.fecha)} </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#2e5eaaff',
    flex: 1,
  },
  cabecera: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 50,
    color: '#FFF',
    
  },
  cabeceraBold: {
    fontWeight: '900',
  },
  btnCerrar: {
    marginTop: 30,
    marginBottom: 90,
    marginHorizontal: 30,
    backgroundColor: '#7cea9cff',
    padding: 15,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: '#593959ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  resumen: {
    marginHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  campo: {
    marginBottom: 20,
  },
  label: {
    textTransform: 'uppercase',
    color: '#555',
    fontWeight: '600',
    fontSize: 13,
  },
  valor: {
    fontWeight: '700',
    fontSize: 22,
    color: '#000',
  },
  contenido: {
    textAlign: 'justify',
  },
});
export default InformacionNota;
