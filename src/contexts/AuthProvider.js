import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, browserLocalPersistence, setPersistence, onAuthStateChanged, signOut } from "@firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState({ loggedIn: false })

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully")
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const login = () => {
        setPersistence( auth, browserLocalPersistence)
            .then(() => {
                signInWithPopup(auth, provider)
                    .then((result) => {
                        console.log("User Logged In")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.customData.email;
        
                        console.error(errorCode, errorMessage, email);
                        
                    });
            })
            .catch((err) => console.error(err))
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                setUser({
                    username: user.displayName,
                    email: user.email,
                    id: user.uid,
                    loggedIn: true
                })
            } else {
                
                setUser({ loggedIn: false })
            }
        })
    }, [])

    const values = {
        login,
        logout,
        user
    };

    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
};