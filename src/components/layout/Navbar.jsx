import { NavLink } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
const navItems = [
    { nombre: "Inicio", ruta: "/inicio", icono: <HomeOutlinedIcon />, color: "#1565C0" },
    { nombre: "Clientes", ruta: "/clientes", icono: <PeopleAltOutlinedIcon />, color: "#00897B" },
    { nombre: "Tareas", ruta: "/tareas", icono: <AssignmentOutlinedIcon />, color: "#EF6C00" },
    { nombre: "Reportes", ruta: "/reportes", icono: <InsertChartOutlinedIcon />, color: "#8E24AA" },
    { nombre: "Ayuda", ruta: "/ayuda", icono: <HelpOutlineOutlinedIcon />, color: "#546E7A" },
];
function Navbar() {
    return (
        <Stack sx={{
            position: { xs: 'fixed', lg: 'static' },
            bottom: { xs: 0, lg: 'auto' },
            left: 0,
            right: 0,
            zIndex: { xs: 1000, lg: 'auto' },
            flexDirection: { xs: 'row', lg: 'column' },
            justifyContent: { xs: 'space-around', lg: 'flex-start' },
            alignItems: { xs: 'center', lg: 'stretch' },
            pt: { xs: 2, lg: '20vh' },
            pb: { xs: 2, lg: 0 },
            mb: { xs: 0, lg: 6 },
            height: { xs: 'auto', lg: '100%' },
            background: '#FFFFFF',
            borderRadius: { xs: 0, lg: 2 },
            boxShadow: 5,
        }}>
            <Box sx={{
                position: { xs: 'static', lg: 'sticky' },
                top: { lg: '24px' },
                display: 'flex',
                flexDirection: { xs: 'row', lg: 'column' },
                justifyContent: { xs: 'space-around', lg: 'flex-start' },
                alignItems: { xs: 'center', lg: 'start' },
                gap: 2,
                px: { xs: 0, lg: 1 }
            }}>
                {navItems.map((item) => (
                    <Button
                        fullWidth
                        key={item.nombre}
                        component={NavLink}
                        to={item.ruta}
                        sx={{
                            display: 'flex',
                            minWidth: { xs: 'auto', lg: '100%' },
                            px: { xs: 1, lg: 2 },
                            textTransform: 'none',
                            justifyContent: { xs: 'space-evenly', lg: 'flex-start' },
                            alignItems: { xs: 'center' },
                            gap: { xs: 0, lg: 2 },
                            color: item.color,
                            "&.active": {
                                color: ("var(--primary)"),
                                fontWeight: 700,
                                bgcolor: "#DCE4F7",
                                borderLeft:"4px solid var(--primary)"
                            },
                        }}
                    >
                        {item.icono}
                        <Typography sx={{
                            display: { xs: 'none', md: 'block' },
                            fontSize: { md: 'auto', lg: '1rem', xl: '1.3rem' },
                            color: 'inherit',
                        }}>
                            {item.nombre}</Typography>
                    </Button>
                ))}
            </Box>
        </Stack >
    );
}
export default Navbar;
