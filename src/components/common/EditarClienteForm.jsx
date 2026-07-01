import { useState } from "react";
import { TextField, Button, Box, Typography, Stack } from "@mui/material";

function EditarClienteForm({ cliente, onClienteEditado, onCancelar }) {
  const [nombre, setNombre] = useState(cliente.name.firstname);
  const [apellido, setApellido] = useState(cliente.name.lastname);
  const [email, setEmail] = useState(cliente.email);
  const [ciudad, setCiudad] = useState(cliente.address.city);
  const [telefono, setTelefono] = useState(cliente.phone);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const respuesta = await fetch(
        `https://fakestoreapi.com/users/${cliente.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: { firstname: nombre, lastname: apellido },
            email,
            address: { city: ciudad },
            phone: telefono,
          }),
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo editar el cliente");
      }

      const clienteActualizado = {
        ...cliente,
        name: { firstname: nombre, lastname: apellido },
        email,
        address: { ...cliente.address, city: ciudad },
        phone: telefono,
      };

      if (onClienteEditado) {
        onClienteEditado(clienteActualizado);
      }
    } catch (error) {
      console.error("Error al editar cliente:", error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Box sx={{ padding: 3, minWidth: 320 }}>
      <Typography variant="h6" gutterBottom>
        Editar Cliente
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
            label="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            fullWidth
          />
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
              {enviando ? "Guardando..." : "Guardar cambios"}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default EditarClienteForm;