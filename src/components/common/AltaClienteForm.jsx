import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function AltaClienteForm({ onClienteCreado }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

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


        if (onClienteCreado) {
            onClienteCreado(nuevoCliente);
        }

        setNombre("");
        setApellido("");
        setEmail("");
        setCiudad("");
        setTelefono("");
        } catch (error) {
        console.error("Error al crear cliente:", error);
        }
    };

    return (
        <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
            Alta de Cliente
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
            />
            <TextField
            label="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
            />
            <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
            />
            <TextField
            label="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
            />
            <TextField
            label="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
            Guardar Cliente
            </Button>
        </form>
        </Box>
    );
}

export default AltaClienteForm;