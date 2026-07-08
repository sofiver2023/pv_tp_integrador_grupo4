import React, { useState, useContext } from 'react';
import { Box, Card, CardContent, Typography, Button, MobileStepper, Chip } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { TareasContext } from '../../context/TareasContext.jsx'; 

function Carrusel() {
  const { tareas } = useContext(TareasContext);
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const getEstiloPrioridad = (p) => {
    if (p === 'Alta') return { bg: '#f9e6e6', text: '#d32f2f' };
    if (p === 'Media') return { bg: '#fff3e0', text: '#f57c00' };
    return { bg: '#e8f5e9', text: '#388e3c' };
  };

  if (!tareas || tareas.length === 0) {
    return (
      <Box sx={{ maxWidth: 400, textAlign: 'center', p: 2 }}>
        <Typography variant="body2" color="text.secondary">No hay tareas pendientes.</Typography>
        <Button onClick={() => navigate('/tareas')} variant="outlined" size="small" sx={{ mt: 2 }}>
          Ir a Tareas
        </Button>
      </Box>
    );
  }

  const maxSteps = tareas.length;
  const tareaActiva = tareas[activeStep];
  const styles = getEstiloPrioridad(tareaActiva.priority);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, p: 2,mx:'auto' }}>
      <Card sx={{ minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 2, boxShadow: 0 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, overflowWrap: 'break-word' }}>
            {tareaActiva.title}
          </Typography>
          <Chip
            label={tareaActiva.priority}
            size="small"
            sx={{ bgcolor: styles.bg, color: styles.text, fontWeight: 'bold' }}
          />
        </CardContent>
      </Card>

      <MobileStepper
        variant="text" 
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ bgcolor: 'transparent', px: 0, pt: 2 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Siguiente
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Atrás
          </Button>
        }
      />

      <Button 
        onClick={() => navigate('/tareas')} 
        variant="contained" 
        fullWidth 
        sx={{ mt: 2, borderRadius: 2 }}
      >
        Ver todas las tareas
      </Button>
    </Box>
  );
}

export default Carrusel;