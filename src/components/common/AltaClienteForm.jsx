import { useState } from "react";
import { TextField, Button, Box, Typography, Stack, MenuItem, CircularProgress, Alert } from "@mui/material";

const CIUDADES_OPCIONES = [
  { value: "San Salvador de Jujuy", label: "San Salvador de Jujuy" },
  { value: "Palpalá", label: "Palpalá" },
  { value: "El Carmen", label: "El Carmen" },
  { value: "Perico", label: "Perico" },
  { value: "Monterrico", label: "Monterrico" },
  { value: "Humahuaca", label: "Humahuaca" },
  { value: "Tilcara", label: "Tilcara" },
  { value: "San Pedro de Jujuy", label: "San Pedro de Jujuy" },
  { value: "Libertador General San Martín", label: "Libertador Gral. San Martín" },
  { value: "La Quiaca", label: "La Quiaca" },
  { value: "Abra Pampa", label: "Abra Pampa" },
];

function AltaClienteForm({ onClienteCreado, onCancelar }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setErrorEnvio(null);
    try {
      const respuesta = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: { firstname: nombre, lastname: apellido },
          email,
          address: { city: ciudad },
          phone: telefono,
        }),
      });
      if (respuesta.status !== 200 && respuesta.status !== 201) {
        throw new Error("No se pudo crear el cliente");
      }
      const clienteCompleto = {
        id: Date.now(),
        name: { firstname: nombre, lastname: apellido },
        email,
        address: { city: ciudad },
        phone: telefono,
      };
      const clientesLocales = JSON.parse(localStorage.getItem("clientesLocales")) || [];
      clientesLocales.push(clienteCompleto);
      localStorage.setItem(
        "clientesLocales",
        JSON.stringify(clientesLocales)
      );
      if (onClienteCreado) {
        onClienteCreado(clienteCompleto);
      }
      setNombre("");
      setApellido("");
      setEmail("");
      setCiudad("");
      setTelefono("");
    } catch (error) {
      console.error("Error al crear cliente:", error);
      setErrorEnvio("No se pudo crear el cliente. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Box sx={{ padding: 3, margin: "0 auto", minWidth: 320, width: "100%", width: { xs: "100%", md: 600 } }}>
      <Typography variant="h6" gutterBottom>
        Alta de Cliente
      </Typography>

      {enviando && (
        <Alert severity="info" icon={<CircularProgress size={20} />} sx={{ mb: 2 }}>
          Procesando, por favor espera...
        </Alert>
      )}

      {errorEnvio && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setErrorEnvio(null)}>
          {errorEnvio}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            fullWidth
            disabled={enviando}
          />
          <TextField
            label="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            fullWidth
            disabled={enviando}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            disabled={enviando}
          />
          <TextField
            select
            label="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            fullWidth
            disabled={enviando}
          >
            {CIUDADES_OPCIONES.map((opcion) => (
              <MenuItem key={opcion.value} value={opcion.value}>
                {opcion.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            fullWidth
            disabled={enviando}
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={onCancelar} disabled={enviando}>
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={enviando}
              startIcon={enviando ? <CircularProgress size={16} color="inherit" /> : null}
            >
              {enviando ? "Guardando..." : "Guardar"}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default AltaClienteForm;
