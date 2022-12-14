import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/Firebase/firebase.init';
import { useEffect } from 'react';

const auth = getAuth(app)
export const AuthProviderContext = createContext();
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const loginPopup = Provider =>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const passwordSignUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const passwordLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser ,{
            displayName: name, photoURL: photo
          })
    }
    const sendEmail=  () =>{
     return sendEmailVerification(auth.currentUser)
    }
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        setUser(CurrentUser)
        setLoading(false)
    });
    return () => {
       return unSubscribe();
    }
    }, [])
    const authInfo = {
        loginPopup,
        user,
        loading,
        logOut,
        passwordSignUp,
        updateUserProfile,
        passwordLogin,
        sendEmail
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;