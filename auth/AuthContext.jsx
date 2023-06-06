import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }){
    const [user, setUser] = useState('');

    function signUp(name, email, password){
        return createUserWithEmailAndPassword(auth, name, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
      }
    
      function logOut() {
        return signOut(auth);
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        };
    }, [])

    return(
        <userAuthContext.Provider
            value={{ user, signUp, logIn, logOut }}
        >
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}