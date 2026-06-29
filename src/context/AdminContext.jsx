import { createContext, useState, useEffect, useContext } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const adminGuardado = localStorage.getItem('adminSession');
        return adminGuardado ? JSON.parse(adminGuardado) : null;
    });

    useEffect(() => {
        if (admin) {
            localStorage.setItem('adminSession', JSON.stringify(admin));
        } else {
            localStorage.removeItem('adminSession');
        }
    }, [admin]);

    const login = (nombre, sector) => {
        setAdmin({ nombre, sector });
    };

    const logout = () => {
        setAdmin(null);
    };

    return (
        <AdminContext.Provider value={{ admin, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    return useContext(AdminContext);
}; 