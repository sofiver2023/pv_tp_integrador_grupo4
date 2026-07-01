import { useState } from "react";
import { TextField, Button, Box, Typography, Stack, MenuItem } from "@mui/material";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
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

      const nuevoCliente = await respuesta.json();

      const clienteCompleto = {
        id: nuevoCliente.id,
        name: { firstname: nombre, lastname: apellido },
        email,
        address: { city: ciudad },
        phone: telefono,
      };

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
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Box sx={{ padding: 3, minWidth: 320 }}>
      <Typography variant="h6" gutterBottom>
        Alta de Cliente
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            select
            label="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            fullWidth
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
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={onCancelar} disabled={enviando}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained" disabled={enviando}>
              {enviando ? "Guardando..." : "Guardar"}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default AltaClienteForm;