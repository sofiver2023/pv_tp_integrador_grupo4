import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { Box, Typography, TextField, MenuItem, Button, Alert} from '@mui/material';
import Header from '../components/layout/Header.jsx'


const Login = () => {
    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');

    const { login } = useAdmin();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre !== '' && sector !== '') {
            login(nombre, sector);
            navigate('/clientes');
        } else {
            Snackbar("Por favor, completa el nombre y selecciona un sector.");
        }
    };

    return (
        <Box sx={{ p: 3, textAlign: 'center', width:'500px', m:'auto'}}>
            <Typography variant="h5" gutterBottom>
                ¡Bienvenido!
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        fullWidth
                    />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <TextField
                        select
                        label="Sector"
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="Soporte">Soporte</MenuItem>
                        <MenuItem value="Gerencia">Gerencia</MenuItem>
                    </TextField>
                </Box>

                <Button type="submit" variant="contained">
                    Ingresar
                </Button>
            </form>
        </Box>
    );
};

export default Login;