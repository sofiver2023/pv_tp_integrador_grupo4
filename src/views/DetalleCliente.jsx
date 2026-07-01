import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Alert,
    Button,
    Avatar,
    Snackbar,
    Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useAdmin } from "../context/AdminContext";

function DetalleCliente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { admin } = useAdmin();

    const [cliente, setCliente] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [eliminando, setEliminando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState(false);

    useEffect(() => {
        const obtenerCliente = async () => {
            try {
                setCargando(true);
                const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);
                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener el cliente");
                }
                const datos = await respuesta.json();
                setCliente(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };
        obtenerCliente();
    }, [id]);

    const handleEliminar = async () => {
        try {
            setEliminando(true);
            const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`, {
                method: "DELETE",
            });
            if (!respuesta.ok) {
                throw new Error("No se pudo eliminar el cliente");
            }
            setMensajeExito(true);
            setTimeout(() => navigate("/clientes"), 1500);
        } catch (err) {
            setError(err.message);
        } finally {
            setEliminando(false);
        }
    };

    if (cargando) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    const { street, number, zipcode, city } = cliente.address;

    return (
        <Box sx={{ maxWidth: 600, margin: "40px auto" }}>
            <Card elevation={4}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Avatar sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}>
                        <PersonIcon fontSize="large" />
                    </Avatar>

                    <Typography variant="h5">
                        {cliente.name.firstname} {cliente.name.lastname}
                    </Typography>

                    <Typography sx={{ mt: 2 }}>
                        <strong>Email:</strong> {cliente.email}
                    </Typography>
                    <Typography>
                        <strong>Teléfono:</strong> {cliente.phone}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" fontWeight="bold">
                        Dirección
                    </Typography>
                    <Typography>
                        <strong>Calle:</strong> {street} N° {number}
                    </Typography>
                    <Typography>
                        <strong>Ciudad:</strong> {city}
                    </Typography>
                    <Typography>
                        <strong>Código Postal:</strong> {zipcode}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" fontWeight="bold">
                        Credenciales de Acceso
                    </Typography>
                    <Typography>
                        <strong>Usuario:</strong> {cliente.username}
                    </Typography>
                    <Typography>
                        <strong>Contraseña:</strong> {cliente.password}
                    </Typography>

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                        <Button variant="contained" onClick={() => navigate("/clientes")}>
                            Volver
                        </Button>

                        {admin?.sector === "Gerencia" && (
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleEliminar}
                                disabled={eliminando}
                            >
                                {eliminando ? "Eliminando..." : "Eliminar Cliente de la Base de Datos"}
                            </Button>
                        )}
                    </Box>
                </CardContent>
            </Card>

            <Snackbar
                open={mensajeExito}
                autoHideDuration={1500}
                message="Cliente eliminado correctamente"
            />
        </Box>
    );
}

export default DetalleCliente;