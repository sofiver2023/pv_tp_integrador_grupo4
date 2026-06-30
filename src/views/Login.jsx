import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { Box, Typography, TextField, MenuItem, Button, Alert, Container, Card, CardContent} from '@mui/material';


const Login = () => {
    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');

    const [tocado, setTocado] = useState({
        nombre: false,
        sector: false
    });    

    const { login } = useAdmin();
    const navigate = useNavigate();

    const botonDeshabilitado = nombre.trim() === '' || sector === '';

    const handleSubmit = (e) => {
        e.preventDefault();

        login(nombre, sector);
        navigate('/clientes');
        
    };

    return (
            <Box sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            bgcolor: '#f4f6f8'
        }}>
            <Container maxWidth="xs">
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', mb: 3 , textAlign:'center'}}>
                            ¡Bienvenido!
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    label="Nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    onBlur={() => setTocado({ ...tocado, nombre: true })}
                                    fullWidth
                                    error={tocado.nombre && nombre.trim() === ''}
                                    helperText={tocado.nombre && nombre.trim() === '' ? "Es necesario ingresar un nombre" : ""}
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    select
                                    label="Sector"
                                    value={sector}
                                    onChange={(e) => setSector(e.target.value)}
                                    onBlur={() => setTocado({ ...tocado, sector: true })}
                                    fullWidth
                                    error={tocado.sector && sector === ''}
                                    helperText={tocado.sector && sector === '' ? "Selecciona un sector" : ""}
                                >
                                    <MenuItem value="Soporte">Soporte</MenuItem>
                                    <MenuItem value="Gerencia">Gerencia</MenuItem>
                                </TextField>
                            </Box>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                fullWidth
                                size="large"
                                disabled={botonDeshabilitado}
                            >
                                Ingresar
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default Login;