const CLAVE = 'actividad_reciente';
const MAXIMO = 10;

export function registrarActividad(tipo, mensaje) {
  const actividades = obtenerActividades();
  const nueva = {
    id: Date.now(),
    tipo,
    mensaje,
    fecha: new Date().toISOString(),
  };
  const actualizadas = [nueva, ...actividades].slice(0, MAXIMO);
  localStorage.setItem(CLAVE, JSON.stringify(actualizadas));
}

export function obtenerActividades() {
  try {
    const datos = localStorage.getItem(CLAVE);
    return datos ? JSON.parse(datos) : [];
  } catch {
    return [];
  }
}

export function tiempoRelativo(fechaISO) {
  const diffMs = Date.now() - new Date(fechaISO).getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return 'justo ahora';
  if (diffMin < 60) return `hace ${diffMin} min`;
  const diffHoras = Math.floor(diffMin / 60);
  if (diffHoras < 24) return `hace ${diffHoras} h`;
  const diffDias = Math.floor(diffHoras / 24);
  return `hace ${diffDias} d`;
}
