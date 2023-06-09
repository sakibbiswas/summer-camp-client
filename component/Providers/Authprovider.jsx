import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../src/firebase/firebase.config';
import axios from 'axios';

// import axios from 'axios';
export const Authcontext = createContext()
const auth = getAuth(app)
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const googleprovider = new GoogleAuthProvider()
    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIN = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            console.log('current user', currentUser);
            // // get and set token 
            if (currentUser && currentUser.email) {
                axios.post('https://bistro-boss-server-sakibbiswas.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log('jwt response', data.data.token)
                        console.log(data);
                        localStorage.setItem('access-token', data.data.token)
                        setloading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }




        })
        return () => {

            return unsubscribe();
        }

    }, [])
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }
    const update = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const authinfo = {
        user,
        loading,
        createuser,
        signIn,
        logOut,
        update,
        googleSignIN,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;