import { Box, Typography, Grid, IconButton } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
            <PeopleAltIcon />
            <Typography variant="h6">Gestión de Clientes</Typography>
          </Box>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            FACULTAD DE INGENIERÍA - UNJU
          </Typography>
          <Typography variant="body2" color="grey.400">
            Analista Programador Universitario - Comisión 3 - Grupo 4
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            INTEGRANTES
          </Typography>
          <Typography variant="body2" color="grey.400">Jonatan Rolando Garcia Acha</Typography>
          <Typography variant="body2" color="grey.400">Juan Israel Flores</Typography>
          <Typography variant="body2" color="grey.400">Paola Milagros Zoe Toconas</Typography>
          <Typography variant="body2" color="grey.400">Victoria Valentina Valencia</Typography>
          <Typography variant="body2" color="grey.400">Glenda Sofia Verdeja</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            SEGUINOS
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
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
