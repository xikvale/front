// src/GlobalContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  user: string;
  setUser: (user: string) => void;
  userId: string;
  setUserId: (userId: string) => void;
  userType: string;
  setUserType: (userType: string) => void;
  resetContext: () => void;
  createUser: (userData: any) => Promise<any>;
  fetchUsers: () => Promise<any>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [userType, setUserType] = useState<string>(''); 

  const resetContext = () => {
    setUser('');
    setUserId('');
    setUserType('');
  };

  const createUser = async (userData: any) => {
    const response = await fetch('http://localhost:3000/api/crear-usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return response.json();
  };

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/api/usuarios');
    return response.json();
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, userId, setUserId, userType, setUserType, resetContext, createUser, fetchUsers }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
