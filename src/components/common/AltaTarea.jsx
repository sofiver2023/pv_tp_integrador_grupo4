import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

function AltaTareaForm({ onCrear, onCancelar }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Media");
  const [estado, setEstado] = useState("Pendiente");
  const [responsable, setResponsable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      id: Date.now(),
      titulo,
      descripcion,
      prioridad,
      estado,
      responsable,
    };

    onCrear(nuevaTarea);

    setTitulo("");
    setDescripcion("");
    setPrioridad("Media");
    setEstado("Pendiente");
    setResponsable("");
  };

  return (
    <Box
      sx={{
        p: 4,
        width: {
          xs: 320,
          md: 500,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Nueva Tarea
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Descripción"
            multiline
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            fullWidth
          />

          <TextField
            select
            label="Prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
            fullWidth
          >
            <MenuItem value="Alta">Alta</MenuItem>
            <MenuItem value="Media">Media</MenuItem>
            <MenuItem value="Baja">Baja</MenuItem>
          </TextField>

          <TextField
            select
            label="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            fullWidth
          >
            <MenuItem value="Pendiente">Pendiente</MenuItem>
            <MenuItem value="En progreso">En progreso</MenuItem>
            <MenuItem value="Completada">Completada</MenuItem>
          </TextField>

          <TextField
            label="Responsable"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            required
            fullWidth
          />

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
          >
            <Button onClick={onCancelar}>
              Cancelar
            </Button>

            <Button
              type="submit"
              variant="contained"
            >
              Guardar
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default AltaTareaForm;