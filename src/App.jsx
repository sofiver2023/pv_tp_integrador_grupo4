import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Login from './views/Login.jsx';
import Clientes from './views/ClientesTest.jsx';
import RutaProtegida from './components/layout/RutaProtegidaTest.jsx';

const App = () => { 
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/clientes"
            element={
              <RutaProtegida>
                <Clientes />
              </RutaProtegida>
            }/>

          <Route path="/" element={<Navigate to="/login" />} />

        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
};

export default App;