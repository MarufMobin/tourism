import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut ,onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    
    // Sing In with google
    const googleProvider = new GoogleAuthProvider();
    const singInWithGoogle = () =>{
        return signInWithPopup( auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

   

    return (
        {
            loading,
            logOut,
            singInWithGoogle,
            user,
            setUser
        }
    );
};

export default useFirebase;