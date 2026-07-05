import { NavLink } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const navItems = [
    { nombre: "Dashboard", ruta: "/dashboard", icono: <HomeOutlinedIcon /> },
    { nombre: "Clientes", ruta: "/clientes", icono: <PeopleAltOutlinedIcon /> },
    { nombre: "Tareas", ruta: "/tareas", icono: <AssignmentOutlinedIcon /> },
    { nombre: "Reportes", ruta: "/reportes", icono: <InsertChartOutlinedIcon /> },
    { nombre: "Ayuda", ruta: "/ayuda", icono: <HelpOutlineOutlinedIcon /> },
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
            alignItems: { xs: 'center', lg: 'start' },
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
                        key={item.nombre}
                        component={NavLink}
                        to={item.ruta}
                        color="inherit"
                        sx={{
                            justifyContent: 'flex-start',
                            alignContent: "space-around",
                            width: '100%',
                            display: 'flex',
                            minWidth: { xs: 'auto', lg: '100%' },
                            px: { xs: 0, lg: 2 },
                            textTransform: 'none',

                            justifyContent: { xs: 'space-evenly', lg: 'flex-start' },
                            alignItems: { xs: 'center', lg: 'start' },
                            justifyContent: { xs: 'space-evenly', lg: 'flex-start' },
                            alignItems: { xs: 'center', lg: 'start' },
                            gap: { xs: 0, lg: 2 },
                            px: { xs: 1, lg: 2 },
                            "&.active": {
                                color: "var(--primary)",
                                fontWeight: 700,
                                bgcolor: "rgba(0, 0, 0, 0.04)"
                            },
                        }}
                    >
                        {item.icono}
                        <Typography sx={{
                            display: { xs: 'none', md: 'block' },
                            fontSize:{md:'auto', lg:'1rem', xl:'1.3rem'}
                        }}>
                            {item.nombre}</Typography>
                    </Button>
                ))}
            </Box>
        </Stack>
    );
}

export default Navbar;