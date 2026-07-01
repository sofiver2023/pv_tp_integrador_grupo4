import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Login from './views/Login.jsx';
import ListaClientes from "./views/ListaClientes";
import RutaProtegida from './components/layout/RutaProtegidaTest.jsx';
import DetalleCliente from "./views/DetalleCliente";
import Dashboard from './views/Dashboard.jsx';
import "./App.css";

const App = () => { 
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/clientes"
            element={
              <RutaProtegida>
                <ListaClientes />
              </RutaProtegida>
            }/>

          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/clientes/:id"
            element={
              <RutaProtegida>
                  <DetalleCliente />
              </RutaProtegida>
            }
          />

          <Route path="/dashboard"
            element={
              <RutaProtegida>
                <Dashboard />
              </RutaProtegida>
            }
          />

        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
};

export default App;