
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  isEditMode: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  toggleEditMode: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'admin') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <AdminContext.Provider value={{
      isAdminLoggedIn,
      isEditMode,
      login,
      logout,
      toggleEditMode
    }}>
      {children}
    </AdminContext.Provider>
  );
};
