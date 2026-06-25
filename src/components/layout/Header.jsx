import { useNavigate } from 'react-router-dom';
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
                <Typography variant="h6">
                    Panel Clientes CRM
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body1">
                        Hola <b>{admin.nombre}</b> - Sector: <b>{admin.sector}</b>
                    </Typography>
                    <Button color="inherit" variant="outlined" onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;