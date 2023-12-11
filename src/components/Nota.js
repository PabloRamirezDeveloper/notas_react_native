import React from 'react'
import { Text, View } from 'react-native'

const Nota = ({ item }) => {
    const { titulo, fecha } = item;

    const formaterFecha = fecha => {
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour:'numeric',
            minute: 'numeric'
        }

        return nuevaFecha.toLocaleString('es-ES', opciones)
    }
    return (
        <View>
            <Text>{titulo}</Text>
            <Text>{formaterFecha(fecha)}</Text>
        </View>

    )
}

export default Nota