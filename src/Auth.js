import React, { useEffect, useState } from 'react';
import app from "./base.js"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrenUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrenUser);;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
