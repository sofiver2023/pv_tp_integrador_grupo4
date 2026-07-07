import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

function Navbar() {
    return (
        <Box
            component="nav"
            sx={{
                display: "flex",
                gap: 2,
                px: 4,
                py: 1.5,
                borderRadius: 0,
                bgcolor: "var(--surface)",
                borderBottom: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
            }}
        >
            <Button
                component={NavLink}
                to="/dashboard"
                color="inherit"
                sx={{
                    "&.active": {
                        color: "var(--primary)",
                        fontWeight: 700,
                        borderBottom: "2px solid var(--primary)",
                    },
                }}
            >
                Dashboard
            </Button>

            <Button
                component={NavLink}
                to="/clientes"
                color="inherit"
                sx={{
                    "&.active": {
                        color: "var(--primary)",
                        fontWeight: 700,
                        borderBottom: "2px solid var(--primary)",
                    },
                }}
            >
                Clientes
            </Button>
        </Box>
    );
}

export default Navbar;