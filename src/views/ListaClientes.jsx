import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  CircularProgress,
  Alert,
  Box,
  Avatar,
  Chip,
  Fab,
  Modal,
  Snackbar,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import AltaClienteForm from "../components/common/AltaClienteForm";
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";
import { useAdmin } from "../context/AdminContext";

function ListaClientes() {
  const { admin } = useAdmin();
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");
  const [eliminandoId, setEliminandoId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        setCargando(true);
        setError(null);
        const respuesta = await fetch("https://fakestoreapi.com/users");
        if (!respuesta.ok) throw new Error("No se pudo obtener la lista de clientes");
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
    return apellido.includes(textoBusqueda) || ciudad.includes(textoBusqueda);
  });

  const handleClienteCreado = (nuevoCliente) => {
    setClientes((prev) => [...prev, nuevoCliente]);
    setModalAbierto(false);
    setMensajeExito("Cliente creado correctamente");
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Seguro que querés eliminar este cliente?");
    if (!confirmar) return;
    setEliminandoId(id);
    try {
      const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`, { method: "DELETE" });
      if (!respuesta.ok) throw new Error("No se pudo eliminar el cliente");
      setClientes((prev) => prev.filter((c) => c.id !== id));
      setMensajeExito("Cliente eliminado correctamente");
    } catch (err) {
      setError("No se pudo eliminar el cliente");
    } finally {
      setEliminandoId(null);
    }
  };

  return (
    <>
      <Box sx={{ padding: 3, maxWidth: 1200, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Gestión de Clientes
        </Typography>

        <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
          <TextField
            label="Buscar por apellido o ciudad"
            variant="outlined"
            fullWidth
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "var(--primary)" }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Fab
            color="primary"
            aria-label="Agregar cliente"
            onClick={() => setModalAbierto(true)}
            sx={{ flexShrink: 0,
              bgcolor: "var(--primary)",
              color: "white",
              "&:hover": {
              bgcolor: "var(--primary-hover)"
              }
            }}
          >
            <PersonAddIcon />
          </Fab>
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
          <Grid container spacing={3} justifyContent="center">
            {clientesFiltrados.map((cliente) => (
              <Grid item xs={12} sm={6} md={4} key={cliente.id}>
                <Card
                  elevation={3}
                  sx={{
                    height: 320,
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    backgroundColor: "var(--primary)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 2 }}>
                      <Avatar
                        sx={{
                            bgcolor: "var(--surface)",
                            color: "var(--primary)",
                            width: 56,
                            height: 56,
                            fontWeight: 700
                        }}
                      >
                        {cliente.name.firstname[0].toUpperCase()}
                        {cliente.name.lastname[0].toUpperCase()}
                      </Avatar>
                      <Typography variant="h6" sx={{ color: "var(--surface)", fontWeight: "bold" }}>
                        {cliente.name.firstname} {cliente.name.lastname}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--surface)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      gutterBottom
                      title={cliente.email}
                    >
                      📧 {cliente.email}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--surface)" }} gutterBottom>
                      📞 {cliente.phone}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--surface)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      title={cliente.address.city}
                    >
                      📍 {cliente.address.city}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "center", paddingBottom: 2, gap: 1 }}>
                    <Button
                      variant="contained"
                      startIcon={<VisibilityIcon />}
                      sx={{ bgcolor: "background.paper", color: "var(--primary)", "&:hover": { bgcolor: "#e0e0e0" } }}
                      onClick={() => navigate(`/clientes/${cliente.id}`)}
                    >
                      Ver Perfil
                    </Button>
                    {admin?.sector === "Gerencia" && (
                      <IconButton
                        sx={{ color: "var(--surface)" }}
                        aria-label="Eliminar cliente"
                        onClick={() => handleEliminar(cliente.id)}
                        disabled={eliminandoId === cliente.id}
                      >
                        {eliminandoId === cliente.id ? (
                          <CircularProgress size={20} sx={{ color: "var(--surface)" }} />
                        ) : (
                          <DeleteIcon />
                        )}
                      </IconButton>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {clientesFiltrados.length === 0 && !cargando && !error && (
          <Box sx={{ textAlign: "center", padding: 4 }}>
            <Alert severity="info">No se encontraron clientes con ese criterio de búsqueda.</Alert>
          </Box>
        )}

        <Modal open={modalAbierto} onClose={() => setModalAbierto(false)}>
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
          }}>
            <AltaClienteForm
              onClienteCreado={handleClienteCreado}
              onCancelar={() => setModalAbierto(false)}
            />
          </Box>
        </Modal>

        <Snackbar open={!!mensajeExito} autoHideDuration={3000} onClose={() => setMensajeExito("")}>
          <Alert severity="success" onClose={() => setMensajeExito("")}>
            {mensajeExito}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default ListaClientes;
