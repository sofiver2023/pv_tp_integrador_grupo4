import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from '../context/AdminContext';

import {
    Grid, Card, CardContent, CardActions, Typography, TextField,
    Box, Chip, Fab, Modal, Snackbar, IconButton, Button, Table, 
    TableBody, TableContainer, TableHead, TableRow, Container
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import TaskIcon from '@mui/icons-material/Task';
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const Ayuda = () => {
    const { admin } = useAdmin();

    return (
        <Box sx={{ margin: "0 auto", width: "75%", maxWidth: { xs: "100%", md: 1200 }, display: "flex", flexDirection: "column" }}>
            <Container maxWidth="xl" sx={{ flex: 1, py: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold">Centro de Ayuda y Soporte</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Recursos, guías y asistencia técnica para {admin.nombre}.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                    <TextField
                        label="Buscar en la base de conocimiento"
                        variant="outlined"
                        fullWidth
                    />
                </Box>

                <Box>
                    <Grid item xs={12} md={4} container spacing={3} sx={{ mb: 4 }} sx={{ mb: 4 }}>
                        <Card
                            elevation={3}
                            sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 220,
                            transition: "transform 0.2s",
                            "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                                <Box
                                    sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    }}
                                >
                                    <Typography variant="h6">
                                        Preguntas Frecuentes (FAQ)
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {/* imagen */}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    ¿Cómo crear una nueva tarea?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    ¿Como sincronizar el calendario? 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    ¿Cómo restablecer mi contraseña?
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} container spacing={3} sx={{ mb: 4 }} sx={{ mb: 4 }}>
                        <Card
                            elevation={3}
                            sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 220,
                            transition: "transform 0.2s",
                            "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                                <Box
                                    sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    }}
                                >
                                    <Typography variant="h6">
                                        Guías y Tutoriales
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {/* imagen */}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Guia de inicio rápido
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Video: Gestión de clientes y proyectos 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Tutorial: creación de reportes
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={12} md={4} container spacing={3} sx={{ mb: 4 }} sx={{ mb: 4 }}>
                        <Card
                            elevation={3}
                            sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 220,
                            transition: "transform 0.2s",
                            "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                                <Box
                                    sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    }}
                                >
                                    <Typography variant="h6">
                                        Soporte Técnico
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {/* imagen */}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Abrir un ticket de soporte
                                    </Typography>
                                    <Button>
                                        Crear Ticket
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={12} md={4} container spacing={3} sx={{ mb: 4 }} sx={{ mb: 4 }}>
                        <Card
                            elevation={3}
                            sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 220,
                            transition: "transform 0.2s",
                            "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                                <Box
                                    sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    }}
                                >
                                    <Typography variant="h6">
                                        Estado y Contacto
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {/* imagen */}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Estado del sistema
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Todos los sistemas operativos
                                    </Typography>
                                    <Button>
                                        Chat en vivo
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Ayuda;