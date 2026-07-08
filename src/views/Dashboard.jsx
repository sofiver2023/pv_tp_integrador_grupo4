import { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Button, Chip
} from '@mui/material';
import imageDashboard from '../assets/secretaria.png'
import Divider from '@mui/material/Divider';
import { obtenerActividades, tiempoRelativo } from '../utils/actividad';

const Dashboard = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    setActividades(obtenerActividades());
  }, []);

  return (
    <Box>
      <Box sx={{
        width: { xs: '100%' },
        my: { xs: 0 },
        backgroundColor: '#DAE5F7',
        borderRadius: { xs: 0, lg: 2 },
        boxShadow: 5,
      }}>
        <Grid container>
          <Box
            component="img"
            src={imageDashboard}
            alt="Secretaria escritorio"
            sx={{
              maxWidth: { xs: 200, lg: 300, xl: 400 },
              minWidth: { xs: 100, xl: 400 },
              height: 'auto'
            }}
          />
          <Box>
            <Box>
              <Typography sx={{ fontSize: { xs: '2rem', fontWeight: 800 } }}>¡Hola!</Typography>
              <Typography sx={{ fontSize: { xs: '1.5rem', fontWeight: 400 } }}>Comencemos a organizar tu día.</Typography>
              <Typography sx={{ fontSize: { xs: '1rem', fontWeight: 800 } }}>Pasos de Inicio</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Grid container spacing={2} sx={{ m: { xs: '1rem', lg: '0px' } }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: { xs: '100%' },
              my: { xs: 0, lg: '1.5rem' },
              p: 2,
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: 2, lg: 2 },
              boxShadow: 5,
            }}>
            <Typography sx={{ fontWeight: 600, fontSize: '1.2rem', py: '10px' }}>Mis Tareas</Typography>
            <Divider />
            <Box sx={{ textAlign: 'center', py: '10px' }}>
              <Typography sx={{ fontWeight: 400, fontSize: '.9rem' }}>No tienes tareas pendientes para hoy ¡Crea la primera!</Typography>
              <Button>+ Nueva Tarea</Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{
            width: { xs: '100%' },
            my: { xs: 0, lg: '1.5rem' },
            p: 2,
            backgroundColor: '#FFFFFF',
            borderRadius: { xs: 2, lg: 2 },
            boxShadow: 5,
          }}>
            <Typography sx={{ fontWeight: 600, fontSize: '1.2rem', py: '10px' }}>Actividad Reciente</Typography>
            <Divider />
            {actividades.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: '10px' }}>
                <Typography sx={{ fontWeight: 400, fontSize: '.9rem' }}>Tu registro de actividad aparecerá aquí.</Typography>
              </Box>
            ) : (
              <Box sx={{ py: '10px' }}>
                {actividades.map((act) => (
                  <Box
                    key={act.id}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 1,
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip
                        label={act.tipo === 'alta' ? 'Alta' : 'Baja'}
                        size="small"
                        sx={{
                          bgcolor: act.tipo === 'alta' ? '#E8F5E9' : '#FFEBEE',
                          color: act.tipo === 'alta' ? '#2E7D32' : '#C62828',
                          fontWeight: 600,
                        }}
                      />
                      <Typography sx={{ fontSize: '.85rem' }}>{act.mensaje}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '.75rem', color: 'text.secondary', whiteSpace: 'nowrap', ml: 1 }}>
                      {tiempoRelativo(act.fecha)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
