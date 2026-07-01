import {
  Box, Typography, Grid, Card, CardContent,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, LinearProgress, Chip, Container
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import TaskIcon from '@mui/icons-material/Task';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const actividad = [
  { usuario: 'Mauricio Villarreal', accion: 'Alta de nuevo cliente (#19)', fecha: 'Hace 10 min', estado: 'Completado' },
  { usuario: 'Noel Chiliguay',      accion: 'Actualización masiva de datos de contacto', fecha: 'Hace 1 hora', estado: 'Completado' },
  { usuario: 'Franco Sanchez',      accion: 'Exportación de métricas a Excel', fecha: 'Hace 3 horas', estado: 'En proceso' },
  { usuario: 'Sistema Automático',  accion: 'Sincronización con FakeStore API', fecha: 'Hace 5 horas', estado: 'Completado' },
  { usuario: 'Sergio Sosa',         accion: 'Intento de borrado de registro maestro', fecha: 'Ayer, 15:45', estado: 'Rechazado' },
];

const estadoColor = (estado) => {
  if (estado === 'Completado') return 'success';
  if (estado === 'En proceso') return 'warning';
  if (estado === 'Rechazado') return 'error';
  return 'default';
};

const servidor = [
  { label: 'Almacenamiento (SSD)', valor: 78, color: 'primary' },
  { label: 'Memoria RAM',          valor: 45, color: 'success' },
  { label: 'Carga de CPU',         valor: 92, color: 'error' },
];

const metricas = [
  { label: 'Clientes Activos',   valor: 14, icon: <PeopleIcon fontSize="large" />,       color: '#1976d2' },
  { label: 'Proyectos Activos',  valor: 4,  icon: <FolderIcon fontSize="large" />,        color: '#388e3c' },
  { label: 'Tareas Pendientes',  valor: 3,  icon: <TaskIcon fontSize="large" />,          color: '#f57c00' },
  { label: 'Alertas de Sistema', valor: 3,  icon: <WarningAmberIcon fontSize="large" />, color: '#d32f2f' },
];

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Container maxWidth="xl" sx={{ flex: 1, py: 4 }}>
        {/* Título */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">Panel de Control</Typography>
          <Typography variant="body2" color="text.secondary">
            Monitoreo global del grupo y paneles de control activos.
          </Typography>
        </Box>

        {/* Cards de métricas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {metricas.map((m) => (
            <Grid item xs={12} sm={6} md={3} key={m.label}>
              <Card elevation={3} sx={{ borderTop: `4px solid ${m.color}` }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">{m.label}</Typography>
                    <Typography variant="h3" fontWeight="bold">{m.valor}</Typography>
                  </Box>
                  <Box sx={{ color: m.color }}>{m.icon}</Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tabla + Estado del Servidor */}
        <Grid container spacing={3}>
          {/* Registro de Actividad */}
          <Grid item xs={12} md={8}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  📋 Registro de Actividad
                </Typography>
                <TableContainer component={Paper} elevation={0}>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell><b>Usuario</b></TableCell>
                        <TableCell><b>Acción</b></TableCell>
                        <TableCell><b>Fecha</b></TableCell>
                        <TableCell><b>Estado</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {actividad.map((row, i) => (
                        <TableRow key={i} hover>
                          <TableCell>{row.usuario}</TableCell>
                          <TableCell>{row.accion}</TableCell>
                          <TableCell>{row.fecha}</TableCell>
                          <TableCell>
                            <Chip label={row.estado} color={estadoColor(row.estado)} size="small" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Estado del Servidor */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                  🖥️ Estado del Servidor
                </Typography>
                {servidor.map((s) => (
                  <Box key={s.label} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{s.label}</Typography>
                      <Typography variant="body2" fontWeight="bold">{s.valor}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={s.valor}
                      color={s.color}
                      sx={{ height: 10, borderRadius: 5 }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
};

export default Dashboard;