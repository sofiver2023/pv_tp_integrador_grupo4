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
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function DetalleCliente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <Box sx={{ maxWidth: 600, margin: "40px auto" }}>
            <Card elevation={4}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                            margin: "auto",
                            mb: 2,
                        }}
                    >
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

                    <Typography>
                        <strong>Ciudad:</strong> {cliente.address.city}
                    </Typography>

                    <Typography>
                        <strong>Usuario:</strong> {cliente.username}
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ mt: 3 }}
                        onClick={() => navigate("/clientes")}
                    >
                        Volver
                    </Button>
                </CardContent>
            </Card>
        </Box>
);
}

export default DetalleCliente;