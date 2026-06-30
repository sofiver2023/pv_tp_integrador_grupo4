import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#333',
                color: 'white',
                py: 2,
                mt: 4,
                textAlign: 'center'
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                <IconButton
                    color="inherit"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
                © 2026 Panel Clientes CRM
            </Typography>
        </Box>
    );
};

export default Footer;