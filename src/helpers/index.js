export const formaterFecha = fecha => {
  const nuevaFecha = new Date(fecha);

  const opciones = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return nuevaFecha.toLocaleString('es-ES', opciones);
};
