import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import Header from '../components/layout/Header.jsx'

const Clientes = () => {
    const clientes = [
        { id: 1, nombre: 'Empresa A', contacto: 'Juan Pérez' },
        { id: 2, nombre: 'Empresa B', contacto: 'Ana García' },
        { id: 3, nombre: 'Empresa C', contacto: 'Luis Rodríguez' }
    ];

    return (
        <Box sx={{ p: 4 }}>
            <Header></Header>
            <Typography variant="h4" gutterBottom>
                Panel de Clientes
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Lista de clientes gestionados actualmente por el sistema.
            </Typography>

            <Paper sx={{ maxWidth: 600, mx: 'auto' }}>
                <List>
                    {clientes.map((cliente) => (
                        <div key={cliente.id}>
                            <ListItem>
                                <ListItemText 
                                    primary={cliente.nombre} 
                                    secondary={`Contacto: ${cliente.contacto}`} 
                                />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default Clientes;