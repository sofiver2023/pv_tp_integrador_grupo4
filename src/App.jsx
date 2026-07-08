import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Login from './views/Login.jsx';
import ListaClientes from "./views/ListaClientes";
import RutaProtegida from './components/layout/RutaProtegida.jsx';
import DetalleCliente from "./views/DetalleCliente";
import Inicio from './views/Inicio.jsx';
import Layout from './components/layout/Layout.jsx';
import "./App.css";
import Ayuda from './views/Ayuda.jsx';
import Reportes from './views/Reportes.jsx';
import ListaTareas from './views/ListaTareas.jsx';
import { TareasProvider } from './context/TareasContext.jsx';

const App = () => { 
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/clientes"
            element={
              <RutaProtegida>
                <Layout>
                  <ListaClientes />
                </Layout>
              </RutaProtegida>
            }/>

          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/clientes/:id"
            element={
              <RutaProtegida>
                <Layout>
                  <DetalleCliente />
                </Layout>
              </RutaProtegida>
            }
          />

          <Route path="/inicio"
            element={
              <RutaProtegida>
                <Layout>
                  <AdminProvider>
                    <TareasProvider>
                      <Inicio />
                    </TareasProvider>
                  </AdminProvider>
                </Layout>
              </RutaProtegida>
            }
          />

          <Route path="/tareas"
            element={
              <RutaProtegida>
                <Layout>
                  <TareasProvider>
                    <ListaTareas />
                  </TareasProvider>
                </Layout>
              </RutaProtegida>
            }
          />
          <Route path="/reportes"
            element={
              <RutaProtegida>
                <Layout>
                  <Reportes />
                </Layout>
              </RutaProtegida>
            }
          />
          <Route path="/ayuda"
            element={
              <RutaProtegida>
                <Layout>
                  <Ayuda />
                </Layout>
              </RutaProtegida>
            }
          />

        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
};

export default App;