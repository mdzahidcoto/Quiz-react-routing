import React, { useState, useContext, useEffect} from 'react';
import '../Firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithUserEmailAndPassword, signOut, setAuthStateChange } from '/firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}) {
    const [loading, setLoading]  = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() =>{
        const auth = getAuth();
        const unsubscribe = setAuthStateChange(auth, (user) =>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // Signup function
    async function Signup (email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    // login function
    function Login (email, password) {
        const auth = getAuth();
        return signInWithUserEmailAndPassword(auth, email, password);
    }

    // logout function
    function Logout (){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        Login,
        Signup,
        Logout
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}