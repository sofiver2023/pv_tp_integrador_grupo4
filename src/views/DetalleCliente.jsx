import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import {
    Box, Typography, CircularProgress, Alert,
    Card, CardContent, Divider, Button
} from '@mui/material';

const DetalleCliente = () => {
    const { id } = useParams();
    const { admin } = useAdmin();
    const navigate = useNavigate();

    const [cliente, setCliente] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [eliminado, setEliminado] = useState(false);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/users/${id}`);
                const data = await res.json();
                setCliente(data);
            } catch (err) {
                setError('Error al cargar los datos del cliente.');
            } finally {
                setCargando(false);
            }
        };
        fetchCliente();
    }, [id]);

    const handleEliminar = async () => {
        try {
            await fetch(`https://fakestoreapi.com/users/${id}`, { method: 'DELETE' });
            setEliminado(true);
        } catch (err) {
            setError('Error al eliminar el cliente.');
        }
    };

    if (cargando) return <Box sx={{ p: 4, textAlign: 'center' }}><CircularProgress /></Box>;
    if (error) return <Box sx={{ p: { xs: 2, sm: 4 } }}><Alert severity="error">{error}</Alert></Box>;
    if (eliminado) return <Box sx={{ p: { xs: 2, sm: 4 } }}><Alert severity="success">Cliente eliminado correctamente.</Alert></Box>;

    return (
        <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 600, mx: 'auto' }}>
            <Button variant="outlined" onClick={() => navigate('/clientes')} sx={{ mb: 2 }}>
                ← Volver
            </Button>

            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }} gutterBottom>
                Ficha del Cliente
            </Typography>

            <Card>
                <CardContent>
                    <Typography variant="h6">{cliente.name.firstname} {cliente.name.lastname}</Typography>
                    <Typography sx={{ wordBreak: 'break-word' }}>Email: {cliente.email}</Typography>
                    <Typography>Teléfono: {cliente.phone}</Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1"><strong>Dirección</strong></Typography>
                    <Typography>Calle: {cliente.address.street} {cliente.address.number}</Typography>
                    <Typography>Ciudad: {cliente.address.city}</Typography>
                    <Typography>Código Postal: {cliente.address.zipcode}</Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1"><strong>Credenciales</strong></Typography>
                    <Typography>Usuario: {cliente.username}</Typography>
                    <Typography>Contraseña: {cliente.password}</Typography>

                    {admin?.sector === 'Gerencia' && (
                        <Box sx={{ mt: 3 }}>
                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                                onClick={handleEliminar}
                            >
                                Eliminar Cliente de la Base de Datos
                            </Button>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default DetalleCliente;