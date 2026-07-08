import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/logo_pv.png";

const Header = () => {
    const { admin, logout } = useAdmin();
    const navigate = useNavigate();

    const theme = useTheme();
    const esMovil = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    const handleLogout = () => {
        logout();
        handleCloseMenu();
        navigate('/login');
    };

    if (!admin) return null;

    return (
        <AppBar position="sticky" elevation={0} sx={{
            mt: { xs: 0, lg: 2 },
            mb: '8px',
            bgcolor: "var(--primary)",
            borderRadius: { xs: 0, lg: 2 },
            boxShadow: 5,
        }}>
            <Toolbar sx={{
                minHeight: 72,
                justifyContent: 'space-between',
                px: 4
            }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box component="img" src={logo} alt="ClientFlow" sx={{ width: 42, height: 42 }} />
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Nexar</Typography>
                        <Typography variant="caption" sx={{ opacity: .8 }}>CRM</Typography>
                    </Box>
                </Box>
                {esMovil ? (
                    <>
                        <IconButton color="inherit" onClick={handleOpenMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            <MenuItem disabled sx={{ opacity: "1 !important", color: "text.primary" }}>
                                <Box>
                                    <Typography variant="body2">Hola, <b>{admin.nombre}</b></Typography>
                                    <Typography variant="caption" sx={{ opacity: 0.7 }}>{admin.sector}</Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>Cerrar Sesión</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ textAlign: "right" }}>
                            <Typography>Hola, <b>{admin.nombre}</b></Typography>
                            <Typography variant="body2" sx={{ opacity: .8 }}>{admin.sector}</Typography>
                        </Box>
                        <Tooltip title="Cerrar Sesión">
                            <IconButton
                                onClick={handleLogout}
                                aria-label="Cerrar sesión"
                                sx={{
                                    color: "#ff5252",
                                    bgcolor: "rgba(255,255,255,.9)",
                                    "&:hover": {
                                        bgcolor: "white",
                                    }
                                }}
                            >
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;