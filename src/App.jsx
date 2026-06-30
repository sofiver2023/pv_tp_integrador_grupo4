import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Login from './views/Login.jsx';
import Clientes from './views/ClientesTest.jsx';
import DetalleCliente from './views/DetalleCliente.jsx';
import RutaProtegida from './components/layout/RutaProtegidaTest.jsx';
import Footer from './components/layout/Footer.jsx';
import { Box } from '@mui/material';

const App = () => {
    return (
        <AdminProvider>
            <BrowserRouter>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Box sx={{ flex: 1 }}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/clientes"
                                element={
                                    <RutaProtegida>
                                        <Clientes />
                                    </RutaProtegida>
                                }
                            />
                            <Route path="/clientes/:id"
                                element={
                                    <RutaProtegida>
                                        <DetalleCliente />
                                    </RutaProtegida>
                                }
                            />
                            <Route path="/" element={<Navigate to="/login" />} />
                        </Routes>
                    </Box>
                    <Footer />
                </Box>
            </BrowserRouter>
        </AdminProvider>
    );
};

export default App;