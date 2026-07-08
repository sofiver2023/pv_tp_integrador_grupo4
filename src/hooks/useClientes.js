import { useState, useEffect } from 'react';

function useClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    try {
      const guardados = localStorage.getItem('clientes');
      if (guardados) {
        const parsed = JSON.parse(guardados);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setClientes(parsed);
          return;
        }
      }
    } catch (e) {
      console.warn('No se pudo leer clientes de localStorage', e);
    }
    setClientes(mockClientes);
  }, []);

  return clientes;
}

const mockClientes = [
  { nombre: 'Juan', apellido: 'Pérez', ciudad: 'Jujuy', fechaAlta: '2026-05-03' },
  { nombre: 'Ana', apellido: 'García', ciudad: 'Salta', fechaAlta: '2026-05-15' },
  { nombre: 'Luis', apellido: 'Gómez', ciudad: 'Jujuy', fechaAlta: '2026-06-02' },
  { nombre: 'María', apellido: 'López', ciudad: 'Tucumán', fechaAlta: '2026-06-20' },
  { nombre: 'Pedro', apellido: 'Ruiz', ciudad: 'Salta', fechaAlta: '2026-07-01' },
];

export default useClientes;
