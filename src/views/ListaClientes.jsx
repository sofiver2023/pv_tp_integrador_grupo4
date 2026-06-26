import { useState, useEffect } from "react";
import AltaClienteForm from "../components/common/AltaClienteForm";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    CircularProgress,
    Alert,
    Box,
    Typography,
    Button
} from "@mui/material";
import ClienteRow from "../components/common/ClienteRow";

function ListaClientes() {
    const [clientes, setClientes] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    useEffect(() => {
        const obtenerClientes = async () => {
        try {
            setCargando(true);
            setError(null);
            const respuesta = await fetch("https://fakestoreapi.com/users");

            if (!respuesta.ok) {
            throw new Error("No se pudo obtener la lista de clientes");
            }

            const datos = await respuesta.json();
            setClientes(datos);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
        };

        obtenerClientes();
    }, []);

    const clientesFiltrados = clientes.filter((cliente) => {
        const textoBusqueda = busqueda.toLowerCase();
        const apellido = cliente.name.lastname.toLowerCase();
        const ciudad = cliente.address.city.toLowerCase();

        return (
        apellido.includes(textoBusqueda) || ciudad.includes(textoBusqueda)
        );
    });

    return (
        <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
            Gestión de Clientes
        </Typography>

        <TextField
            label="Buscar por apellido o ciudad"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />

        {cargando && (
            <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
            <CircularProgress />
            </Box>
        )}

        {error && !cargando && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
            </Alert>
        )}

        {!cargando && !error && (
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre Completo</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Ciudad</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {clientesFiltrados.map((cliente) => (
                    <ClienteRow key={cliente.id} cliente={cliente} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        )}

        {clientesFiltrados.length === 0 && !cargando && !error && (
            <Box sx={{ textAlign: "center", padding: 4 }}>
            <Alert severity="info">
                No se encontraron clientes con ese criterio de búsqueda.
            </Alert>
            </Box>
        )}
        
        
    <Button 
        variant="contained" 
        color="primary" 
        sx={{ marginBottom: 3, marginTop: 3, padding: 1.5 }}
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
        {mostrarFormulario ? "Cerrar Formulario" : "Agregar Cliente"}
        </Button>


        {mostrarFormulario && (
        <AltaClienteForm 
            onClienteCreado={(nuevoCliente) => setClientes([...clientes, nuevoCliente])} 
        />
        )}

        </Box>
        
    );
}

export default ListaClientes;