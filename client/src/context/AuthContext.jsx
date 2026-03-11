import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../config/api";
import toast from "react-hot-toast";

const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: ()=> {},
    user: null,
    setUser: ()=> {},
    login: async ()=> {},
    signUp: async ()=> {},
    logout: async ()=> {},
});

export const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signUp = async ({name, email, password})=> {
        try{
            const {data} = await api.post('/api/auth/register', {name, email, password});
            if(data.user){
                setUser(data.user)
                setIsLoggedIn(true);
            }
            toast.success(data.message);
        }
        catch(err) {
            console.error(err);
        }
    }
    const login = async ({email, password})=> {
        try{
            const {data} = await api.post('/api/auth/login', {email, password});
            if(data.user){
                setUser(data.user)
                setIsLoggedIn(true);
            }
            toast.success(data.message);
        }
        catch(err) {
            console.error(err);
        }
    }
    const logout = async ()=> {
        try{
            const {data} = await api.post('/api/auth/logout');
            setUser(null);
            setIsLoggedIn(false);
            toast.success(data.message);
        }
        catch(err) {
            console.error(err);
        }
    }
    const fetchUser = async ()=> {
        try{
            const {data} = await api.get('/api/auth/verify');
            if(data.user){
                setUser(data.user);
                setIsLoggedIn(true);
            }
        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        (async () => {
            await fetchUser();
        })();
    },[])
    const value = {
        user, setUser, isLoggedIn, setIsLoggedIn, signUp, login, logout, fetchUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext);