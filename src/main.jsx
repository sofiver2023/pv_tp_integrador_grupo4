import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './styles/variables.css';
import './styles/global.css';
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5333ed',
    },
    secondary: {
      main: '#2cd4d9',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)