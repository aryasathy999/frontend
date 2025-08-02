import React, {createContext, useContext, useState, useEffect} from 'react';

const AuthenticationContext = createContext();

export const useAuth = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const storedName = localStorage.getItem('userName');
        const storedEmail = localStorage.getItem('userEmail');
        setIsLoggedIn(loggedIn);
        if(loggedIn) {
            setUserName(storedName);
            setUserEmail(storedEmail);
        }
    },[]);

    const login = (name, email) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        setUserName(name);
        setUserEmail(email);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        setUserName('');
        setUserEmail('');
        setIsLoggedIn(false);
    };

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, login, logout, userName, userEmail }}>
            {children}
        </AuthenticationContext.Provider>
    );
};