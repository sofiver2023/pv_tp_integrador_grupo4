import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import logo from '../assets/logo_pv.png';
import Footer from '../components/layout/Footer.jsx';

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
        navigate('/inicio');
    };
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
            }}>
                <Box sx={{
                    flex: 1,
                    bgcolor: 'var(--primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    py: { xs: 4, md: 0 },
                    minHeight: { xs: 200, md: 'auto' },
                }}>
                    <Box sx={{
                        width: 72,
                        height: 72,
                        borderRadius: 3,
                        bgcolor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box component="img" src={logo} alt="Nexar" sx={{ width: 48, height: 48 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                        Nexar CRM
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', opacity: .85, textAlign: 'center', maxWidth: 260 }}>
                        Gestiona tus clientes en un solo lugar
                    </Typography>
                </Box>

                <Box sx={{
                    flex: 1,
                    bgcolor: '#f4f6f8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                }}>
                    <Box sx={{ width: '100%', maxWidth: 360 }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            ¡Bienvenido!
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                            Ingresa tus datos para continuar
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
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};
export default Login;
