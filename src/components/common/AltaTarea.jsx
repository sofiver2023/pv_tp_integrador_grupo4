import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from "@mui/material";

function AltaTarea({ open, onClose, onAgregar }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Baja");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const fecha = new Date();
    const createdAt = `${fecha.toLocaleDateString()}`;

    onAgregar({ title, description, priority, createdAt });
    
    setTitle("");
    setDescription("");
    setPriority("Baja");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ fontWeight: "bold" }}>Nueva Tarea</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, pt: 1 }}>
            <TextField
              label="Título de la tarea"
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Descripción"
              fullWidth
              required
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel>Prioridad</InputLabel>
              <Select
                value={priority}
                label="Prioridad"
                onChange={(e) => setPriority(e.target.value)}
              >
                <MenuItem value="Alta">Alta</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Baja">Baja</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} color="inherit">Cancelar</Button>
          <Button type="submit" variant="contained" color="primary">Guardar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AltaTarea;