import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
  Alert,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

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

  // Filtrado dinámico por apellido o ciudad
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
        <Grid container spacing={3}>
          {clientesFiltrados.map((cliente) => (
            <Grid item xs={12} sm={6} md={4} key={cliente.id}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                    <Avatar sx={{ marginRight: 2, bgcolor: "primary.main" }}>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6">
                        {cliente.name.firstname} {cliente.name.lastname}
                      </Typography>
                      <Chip label={`ID: ${cliente.id}`} size="small" variant="outlined" />
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    📧 {cliente.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    📞 {cliente.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {cliente.address.city}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {clientesFiltrados.length === 0 && !cargando && !error && (
        <Box sx={{ textAlign: "center", padding: 4 }}>
          <Alert severity="info">
            No se encontraron clientes con ese criterio de búsqueda.
          </Alert>
        </Box>
      )}
    </Box>
  );
}

export default ListaClientes;