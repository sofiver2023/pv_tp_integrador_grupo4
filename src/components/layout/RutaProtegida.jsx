import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

const RutaProtegida = ({ children }) => {
  const { admin } = useAdmin();

  if (!admin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RutaProtegida;