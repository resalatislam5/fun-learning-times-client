import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/Firebase/firebase.init';
import { useEffect } from 'react';

const auth = getAuth(app)
export const AuthProviderContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleLogin = googleProvider =>{
        return signInWithPopup(auth, googleProvider)
    }
    useEffect( ()=>{
const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
    setUser(CurrentUser)
});
return () => unSubscribe()
    }, [])
    const authInfo = {googleLogin}
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;