import {
  Box, Typography, Grid, Card, CardContent,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, LinearProgress, Chip, Container,
  Stack,
  Button
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import TaskIcon from '@mui/icons-material/Task';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import imageDashboard from '../assets/secretaria.png'
import Divider from '@mui/material/Divider';


const Dashboard = () => {
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
            <Box sx={{ textAlign: 'center', py: '10px' }}>
              <Typography sx={{ fontWeight: 400, fontSize: '.9rem' }}>Tu registro de actividad aparecerá aquí.</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Dashboard;