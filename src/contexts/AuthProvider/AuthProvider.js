import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/Firebase/firebase.init';
import { useEffect } from 'react';

const auth = getAuth(app)
export const AuthProviderContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const loginPopup = Provider =>{
        return signInWithPopup(auth, Provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const passwordSignUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const passwordLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser ,{
            displayName: name, photoURL: photo
          })
    }
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        setUser(CurrentUser)
    });
    return () => {
       return unSubscribe();
    }
    }, [])
    const authInfo = {loginPopup,user,logOut,passwordSignUp,updateUserProfile,passwordLogin}
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;