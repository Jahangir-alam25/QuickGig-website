import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = (provider) => {
         return signInWithPopup(auth, provider);
       };
     const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };
    const userInfo = {
        createUser,
        signInWithGoogle,
        updateUser,
        user,
        setUser
    }
    console.log(user);
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;