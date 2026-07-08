import { createContext, useState, useEffect } from "react";

// 1. Creamos el contexto
export const TareasContext = createContext();

// 2. Creamos el Provider
export const TareasProvider = ({ children }) => {
    const [tareas, setTareas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://6a4d96a3e1cf82a4a17e6e5a.mockapi.io/api/v1/tareas";

    
    useEffect(() => {
        const obtenerTareas = async () => {
            try {
                setCargando(true);
                setError(null);
                
                const respuesta = await fetch(API_URL);
                if (!respuesta.ok) throw new Error("No se pudo obtener la lista de tareas");
                const datos = await respuesta.json();
                
                setTareas(datos);
                localStorage.setItem("listado_tareas", JSON.stringify(datos));
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };
        obtenerTareas();
    }, []);



    const agregarTareaContext = async (nuevaTarea) => {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevaTarea),
        });
        if (!respuesta.ok) throw new Error("Error al guardar");
        const tareaCreada = await respuesta.json();
        const actualizadas = [...tareas, tareaCreada];
        
        setTareas(actualizadas);
        localStorage.setItem("listado_tareas", JSON.stringify(actualizadas));
    };


    const editarTareaContext = async (tareaEditada) => {
        const respuesta = await fetch(`${API_URL}/${tareaEditada.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tareaEditada),
        });
        if (!respuesta.ok) throw new Error("Error al actualizar");
        const tareaServidor = await respuesta.json();
        const actualizadas = tareas.map((t) => (t.id === tareaServidor.id ? tareaServidor : t));
        
        setTareas(actualizadas);
        localStorage.setItem("listado_tareas", JSON.stringify(actualizadas));
    };


    const eliminarTareaContext = async (id) => {
        const respuesta = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!respuesta.ok) throw new Error("Error al eliminar");
        
        const actualizadas = tareas.filter((t) => t.id !== id);
        setTareas(actualizadas);
        localStorage.setItem("listado_tareas", JSON.stringify(actualizadas));
    };

    // 3. Pasamos todo lo que necesitamos compartir en el atributo "value"
    return (
        <TareasContext.Provider value={{ 
            tareas, 
            cargando, 
            error, 
            agregarTareaContext, 
            editarTareaContext, 
            eliminarTareaContext 
        }}>
            {children}
        </TareasContext.Provider>
    );
};