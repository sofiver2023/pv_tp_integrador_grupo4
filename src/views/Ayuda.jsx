import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from '../context/AdminContext';
import AyudaPreguntas from '../assets/AyudaPreguntas.png';
import AyudaGuia from '../assets/AyudaGuia.png';
import AyudaSoporte from '../assets/AyudaSoporte.png';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import {
    Grid, Card, CardContent, CardActions, Typography, TextField,
    Box, Chip, Fab, Modal, Snackbar, IconButton, Button, Table, 
    TableBody, TableContainer, TableHead, TableRow, Container
} from '@mui/material';

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";


const Ayuda = () => {
    const { admin } = useAdmin();

    return (
        <Box sx={{ padding: 3, maxWidth: 1200, margin: "0 auto" }}>
            <Container>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold">Centro de Ayuda y Soporte</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Recursos, guías y asistencia técnica para {admin?.nombre}.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                    <TextField
                        label="Buscar en la base de conocimientos"
                        variant="outlined"
                        fullWidth
                        slotProps={{
                        input: {
                            startAdornment: (
                                <SearchIcon sx={{ color: "var(--primary)" }} />
                            ),
                        },
                        }}
                    />
                </Box>



                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card
                            elevation={3}
                            sx={{
                                height: "100%",
                                width: "100%",
                                my: { xs: 0, lg: '1rem' },
                                display: "flex",
                                alignItems: "center",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <CardContent sx={{display: "flex", gap: 3, width: "100%", alignItems: "flex-start" }}>
                                <Box sx={{ flexShrink: 0 }}>
                                    <img
                                        src={AyudaPreguntas}
                                        alt="Preguntas Frecuentes"
                                        style={{
                                            width: 90,
                                            height: 90,
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        Guías y Tutoriales
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        ¿Cómo crear una nueva tarea?
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        ¿Cómo sincronizar el calendario?
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        ¿Cómo restablecer mi contraseña?
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card
                            elevation={3}
                            sx={{
                                height: "100%",
                                width: "100%",
                                my: { xs: 0, lg: '1rem' },
                                display: "flex",
                                alignItems: "center",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <CardContent sx={{ display: "flex", gap: 3, width: "100%", alignItems: "flex-start" }}>
                                <Box sx={{ flexShrink: 0 }}>
                                    <img
                                        src={AyudaGuia}
                                        alt="Guías y Tutoriales"
                                        style={{
                                            width: 90,
                                            height: 90,
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        Guías y Tutoriales
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        Guía de inicio rápido
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        Video: Gestion de clientes
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        Tutorial: Creación de reportes
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card
                            elevation={3}
                            sx={{
                                height: "100%",
                                width: "100%",
                                my: { xs: 0, lg: '1rem' },
                                display: "flex",
                                alignItems: "center",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <CardContent sx={{ display: "flex", gap: 3, width: "100%", alignItems: "flex-start" }}>
                                <Box sx={{ flexShrink: 0 }}>
                                    <img
                                        src={AyudaSoporte}
                                        alt="Soporte Técnico"
                                        style={{
                                            width: 90,
                                            height: 90,
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>

                                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        Soporte Técnico
                                    </Typography>
                                    
                                    <Typography variant="body2"
                                        color="text.secondary" 
                                        sx={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            "&:hover": { color: "primary.main" }
                                        }} 
                                    >
                                        Abrir un ticket de soporte
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ 
                                            paddingY: 1.2,
                                            textTransform: "none",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        Chat en vivo
                                </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card
                            elevation={3}
                            sx={{
                                height: "100%",
                                width: "100%",
                                my: { xs: 0, lg: '1rem' },
                                display: "flex",
                                alignItems: "center",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <CardContent sx={{ display: "flex", width: "100%", alignItems: "stretch" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                                    
                                    <Typography variant="h6" fontWeight="bold">
                                        Estado y Contacto
                                    </Typography>
                                    
                                    <Box sx={{ width: "100%" }}>
                                        
                                        <Box sx={{
                                            padding: 2, 
                                            backgroundColor: "#f5f5f5",
                                            borderRadius: "8px", 
                                            display: "flex", 
                                            alignItems: "center", 
                                            gap: 2,
                                            width: "100%",
                                            boxSizing: "border-box",
                                            mb: 2
                                        }}>
                                            <CheckCircleIcon color="success" sx={{ fontSize: 28 }} />
                                            <Box>
                                                <Typography variant="body1" color="text.primary" fontWeight="bold" lineHeight={1.2}>
                                                    Estado del sistema
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Todos los sistemas operativos
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ 
                                                paddingY: 1.2,
                                                textTransform: "none",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            Chat en vivo
                                        </Button>
                                    </Box>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Ayuda;