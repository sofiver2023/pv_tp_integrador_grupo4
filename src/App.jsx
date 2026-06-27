import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaClientes from "./views/ListaClientes";
import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<ListaClientes />} />
        <Route path="/" element={<ListaClientes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;