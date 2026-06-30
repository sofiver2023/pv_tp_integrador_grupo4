import { useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header = () => {
    const { admin, logout } = useAdmin();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!admin) {
        return null;
    }

    return (
        <AppBar position="static" sx={{ bgcolor: '#333' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Gestión de Clientes
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mr: 4 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/dashboard"
                    >
                        Dashboard
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/clientes"
                    >
                        Clientes
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body1">
                        Hola <b>{admin.nombre}</b> - Sector: <b>{admin.sector}</b>
                    </Typography>
                    <Button color="" variant="contained" onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;