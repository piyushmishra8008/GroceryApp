import React, { createContext, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const navigate=useNavigate();
    const [user,setUser] =useState(true);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const value = { 
        navigate, 
        user, 
        setUser, 
        isSeller, 
        setIsSeller, 
        showUserLogin, 
        setShowUserLogin 
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;