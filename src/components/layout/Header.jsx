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
            <Toolbar
                sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    py: { xs: 1.5, sm: 1 },
                    gap: { xs: 1, sm: 0 }
                }}
            >
                <Typography variant="h6" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                    Panel Clientes CRM
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        gap: { xs: 1, sm: 2 },
                        width: { xs: '100%', sm: 'auto' }
                    }}
                >
                    <Typography variant="body2">
                        Hola <b>{admin.nombre}</b> - Sector: <b>{admin.sector}</b>
                    </Typography>
                    <Button
                        color="inherit"
                        variant="outlined"
                        size="small"
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;