import { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Fab,
    Modal,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import AltaTareaForm from "../components/common/AltaTarea";

function Tareas() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [tareas, setTareas] = useState([
        {
            id: 1,
            titulo: "Revisar dashboard",
            descripcion: "Verificar métricas y estadísticas.",
            estado: "Pendiente",
            prioridad: "Alta",
            responsable: "Veronica",
        },
        {
            id: 2,
            titulo: "Actualizar clientes",
            descripcion: "Revisar altas y bajas del sistema.",
            estado: "En progreso",
            prioridad: "Media",
            responsable: "Juan",
        },
        {
            id: 3,
            titulo: "Preparar presentación",
            descripcion: "Revisar funcionalidades para la defensa.",
            estado: "Completada",
            prioridad: "Baja",
            responsable: "Ariel",
        },
    ]);
    const handleCrearTarea = (nuevaTarea) => {
        setTareas((prev) => [...prev, nuevaTarea]);
        setModalAbierto(false);
    };
    const pendientes = tareas.filter((tarea) => tarea.estado === "Pendiente");
    const progreso = tareas.filter((tarea) => tarea.estado === "En progreso");
    const completadas = tareas.filter((tarea) => tarea.estado === "Completada");
    const renderColumna = (titulo, tareasColumna) => (
        <Grid item xs={12} md={4}>
            <Typography
                variant="h6"
                sx={{
                mb: 2,
                fontWeight: "bold",
                color: "var(--primary)",
                }}
            >
            {titulo}
        </Typography>

        {tareasColumna.map((tarea) => (
            <Card
            key={tarea.id}
            sx={{
                mb: 2,
                borderRadius: 3,
                backgroundColor: "var(--surface)",
            }}
            >
            <CardContent>
                <Typography variant="h6" gutterBottom>
                {tarea.titulo}
                </Typography>

                <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
                >
                {tarea.descripcion}
                </Typography>

                <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                }}
                >
                <Chip
                    label={tarea.prioridad}
                    color={
                    tarea.prioridad === "Alta"
                        ? "error"
                        : tarea.prioridad === "Media"
                        ? "warning"
                        : "success"
                    }
                    size="small"
                />

                <Chip
                    label={tarea.responsable}
                    variant="outlined"
                    size="small"
                />
                </Box>
            </CardContent>
            </Card>
        ))}
        </Grid>
    );

    return (
        <>
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    fontWeight: "bold",
                }}
            >
                Gestión de Tareas
            </Typography>

            <Grid container spacing={3}>
                {renderColumna("Pendientes", pendientes)}
                {renderColumna("En progreso", progreso)}
                {renderColumna("Completadas", completadas)}
            </Grid>

            <Fab
                variant="extended"
                onClick={() => setModalAbierto(true)}
                sx={{
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    zIndex: 1000,
                    bgcolor: "var(--primary)",
                    color: "white",
                    "&:hover": {
                        bgcolor: "var(--primary-hover)",
                    }
                }}
            >
                <AddIcon sx={{ mr: 0 }} />
            </Fab>
        </Box>

        <Modal
            open={modalAbierto}
            onClose={() => setModalAbierto(false)}
        >
            <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow: 24,
            }}
            >
            <AltaTareaForm
                onCrear={handleCrearTarea}
                onCancelar={() => setModalAbierto(false)}
            />
            </Box>
        </Modal>
        </>
    );
}

export default Tareas;