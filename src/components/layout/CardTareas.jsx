import { Card, CardContent, Typography, Box, Chip, IconButton } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function CardTareas({
    id = "0",
    priority = "Baja",
    title = "Sin título",
    description = "Sin descripción",
    createdAt = "Sin fecha",
    onDelete = () => { },
    onEdit = () => { }
}) {

    const getEstiloPrioridad = (p) => {
        if (p === 'Alta') return { bg: '#f9e6e6', text: '#d32f2f' };
        if (p === 'Media') return { bg: '#fff3e0', text: '#f57c00' };
        return { bg: '#e8f5e9', text: '#388e3c' };
    };

    const styles = getEstiloPrioridad(priority);

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',      
            maxWidth: '100%',   
            minWidth: 0,        
            flexGrow: 1,        
            boxSizing: 'border-box',
            borderRadius: 3,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden'
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                '&:last-child': { pb: 2 }
            }}>

                <Box sx={{ flexGrow: 1 }}>
                    <Chip
                        label={priority}
                        sx={{
                            bgcolor: styles.bg,
                            color: styles.text,
                            fontWeight: 'bold',
                            borderRadius: 1.5,
                            mb: 1.5
                        }}
                    />

                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            lineHeight: 1.2,
                            mb: 1,
                            color: '#1a1a1a',
                            wordBreak: 'break-word'
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mb: 2,
                            wordBreak: 'break-word'
                        }}
                    >
                        {description}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', gap: 0.5 }}>
                        <AccessTimeOutlinedIcon fontSize="small" sx={{ fontSize: 18 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {createdAt}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <IconButton size="small" aria-label="editar" onClick={() => onEdit(id)}>
                            <ModeEditOutlineOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </IconButton>
                        <IconButton size="small" aria-label="eliminar" onClick={() => onDelete(id)}>
                            <DeleteOutlineOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </IconButton>
                        <IconButton size="small" aria-label="completar">
                            <CheckCircleOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </IconButton>
                    </Box>
                </Box>

            </CardContent>
        </Card>
    );
}

export default CardTareas;