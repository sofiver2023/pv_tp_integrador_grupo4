import { useState, useContext } from "react";
import {
    Grid,
    Typography,
    CircularProgress,
    Alert,
    Box,
    Snackbar,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CardTareas from "../components/layout/CardTareas.jsx";
import AltaTarea from "../components/common/AltaTarea.jsx";
import EditarTarea from "../components/common/EditarTarea.jsx";
import { TareasContext } from "../context/TareasContext.jsx"; 

function ListaTareas() {
    const { 
        tareas, 
        cargando, 
        error, 
        agregarTareaContext, 
        editarTareaContext, 
        eliminarTareaContext 
    } = useContext(TareasContext);

    const [mensajeExito, setMensajeExito] = useState("");
    const [modalAltaAbierto, setModalAltaAbierto] = useState(false);
    const [modalEditarAbierto, setModalEditarAbierto] = useState(false);
    const [dialogEliminarAbierto, setDialogEliminarAbierto] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    const handleAgregarTarea = async (nuevaTarea) => {
        try {
            await agregarTareaContext(nuevaTarea);
            setMensajeExito("Tarea agregada correctamente");
            setModalAltaAbierto(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditarTarea = async (tareaEditada) => {
        try {
            await editarTareaContext(tareaEditada);
            setMensajeExito("Tarea actualizada correctamente");
            setModalEditarAbierto(false);
            setTareaSeleccionada(null);
        } catch (err) {
            console.error(err);
        }
    };

    const ejecutarEliminacion = async () => {
        if (!tareaSeleccionada) return;
        try {
            await eliminarTareaContext(tareaSeleccionada.id);
            setMensajeExito("Tarea eliminada correctamente");
        } catch (err) {
            console.error(err);
        } finally {
            setDialogEliminarAbierto(false);
            setTareaSeleccionada(null);
        }
    };

    const abrirConfirmacionEliminar = (id) => {
        const tarea = tareas.find((t) => t.id === id);
        setTareaSeleccionada(tarea);
        setDialogEliminarAbierto(true);
    };

    const abrirModalEditar = (id) => {
        const tarea = tareas.find((t) => t.id === id);
        setTareaSeleccionada(tarea);
        setModalEditarAbierto(true);
    };

    return (
        <Box sx={{ padding: 3, maxWidth: 1200, margin: "0 auto", minWidth: 0}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Gestión de Tareas
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setModalAltaAbierto(true)}
                    sx={{ borderRadius: 2 }}
                >
                    Añadir Tarea
                </Button>
            </Box>

            {cargando && (
                <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
                    <CircularProgress />
                </Box>
            )}

            {error && !cargando && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>
            )}

            {!cargando && !error && (
                <Grid container spacing={3} alignItems="stretch">
                    {tareas.map((tarea) => (
                        <Grid
                            item 
                            xs={12} 
                            sm={6} 
                            md={6} 
                            lg={4} 
                            key={tarea.id}
                            sx={{ display: 'flex' }}
                        >
                            <CardTareas
                                id={tarea.id}
                                priority={tarea.priority}
                                title={tarea.title}
                                description={tarea.description}
                                createdAt={tarea.createdAt}
                                onDelete={abrirConfirmacionEliminar}
                                onEdit={abrirModalEditar}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            {tareas.length === 0 && !cargando && !error && (
                <Box sx={{ textAlign: "center", padding: 4 }}>
                    <Alert severity="info">No hay tareas pendientes.</Alert>
                </Box>
            )}

            <AltaTarea
                open={modalAltaAbierto}
                onClose={() => setModalAltaAbierto(false)}
                onAgregar={handleAgregarTarea}
            />

            <EditarTarea
                open={modalEditarAbierto}
                onClose={() => {
                    setModalEditarAbierto(false);
                    setTareaSeleccionada(null);
                }}
                tarea={tareaSeleccionada}
                onEditar={handleEditarTarea}
            />

            <Dialog
                open={dialogEliminarAbierto}
                onClose={() => setDialogEliminarAbierto(false)}
            >
                <DialogTitle sx={{ fontWeight: "bold" }}>¿Eliminar tarea?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminar la tarea "{tareaSeleccionada?.title}"?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setDialogEliminarAbierto(false)} color="inherit">
                        Cancelar
                    </Button>
                    <Button onClick={ejecutarEliminacion} color="error" variant="contained">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={!!mensajeExito} autoHideDuration={3000} onClose={() => setMensajeExito("")}>
                <Alert severity="success" onClose={() => setMensajeExito("")}>
                    {mensajeExito}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default ListaTareas;