import { Box, Typography, Grid, Stack, IconButton } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/logo_pv.png";


function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: 4,
        marginTop: 6,
      }}
    >
      <Grid container spacing={4} sx={{ alignItems: 'center', justifyContent: 'space-around', }}>
        <Grid item xs={12} md={12} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1.5, mb: 2 }}>
              <Box component="img" src={logo} alt="Nexar CRM" sx={{ width: 45, height: 45 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>Nexar</Typography>
                <Typography variant="caption" sx={{ opacity: .7, letterSpacing: 1 }}>CRM SYSTEM</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 2, maxWidth: 300, mx: { xs: 'auto', md: 0 } }}>
              Solución integral para la gestión de clientes y métricas corporativas en tiempo real.
            </Typography>
            {/* ICONOS DE REDES SOCIALES [3, 5] */}
            <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <IconButton color="inherit" sx={{ "&:hover": { color: "#1877F2" } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ "&:hover": { color: "#E4405F" } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ "&:hover": { color: "#0A66C2" } }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

        <Grid item xs={12} md={12} lg={6} sx={{textAlign:'center'}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
            <PeopleAltIcon />
            <Typography variant="h6">Gestión de Clientes</Typography>
          </Box>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            FACULTAD DE INGENIERÍA - UNJU
          </Typography>
          <Typography variant="body2" color="grey.400">
            Analista Programador Universitario
          </Typography>
          <Typography variant="body2" color="grey.400">
            Comisión 3 - Grupo 4
          </Typography>
        </Grid>



        <Grid item xs={12} md={12} lg={6} sx={{ textAlign: 'right' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            INTEGRANTES
          </Typography>
          <Typography variant="body2" color="grey.400">Jonatan Rolando Garcia Acha</Typography>
          <Typography variant="body2" color="grey.400">Juan Israel Flores</Typography>
          <Typography variant="body2" color="grey.400">Paola Milagros Zoe Toconas</Typography>
          <Typography variant="body2" color="grey.400">Victoria Valentina Valencia</Typography>
          <Typography variant="body2" color="grey.400">Glenda Sofia Verdeja</Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: "1px solid grey",
          marginTop: 3,
          paddingTop: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="grey.400">
          © 2026 Proyecto Final APU - Comisión 3 Grupo 4. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;