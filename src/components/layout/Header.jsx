import { useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import logo from "../../assets/logo_pv.png";

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
        <AppBar position="static" elevation={0} sx={{ bgcolor:"var(--primary)", borderRadius: 0 }}>
            <Toolbar sx={{ minHeight: 72, justifyContent: 'space-between', px: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                        component="img"
                        src={logo}
                        alt="ClientFlow"
                        sx={{
                            width: 42,
                            height: 42,
                        }}
                    />
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700 }}
                        >
                            Nexar
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{ opacity: .8 }}
                        >
                            CRM
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, borderRadius:2, px:2 }}>
                    <Box
                        sx={{
                            textAlign: "right"
                        }}
                        >
                        <Typography>
                            Hola, <b>{admin.nombre}</b>
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ opacity:.8 }}
                        >
                            {admin.sector}
                        </Typography>
                    </Box>
                    <Button 
                        color="inherit" 
                        variant="outlined" 
                        onClick={handleLogout}
                        sx={{
                            color:"white",
                            borderColor:"rgba(255,255,255,.5)",
                            "&:hover":{
                                borderColor:"white",
                                bgcolor:"rgba(255,255,255,.08)"
                            }
                        }}
                    >
                        Cerrar Sesión
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;