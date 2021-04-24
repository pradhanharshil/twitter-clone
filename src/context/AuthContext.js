import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
        return unsubscribe;
    }, []);

    function login(email, passwd) {
        return auth.signInWithEmailAndPassword(email, passwd);
    }

    function signup(email, passwd) {
        return auth.createUserWithEmailAndPassword(email, passwd);
    }

    function logout() {
        return auth.signOut();
    }

    const value = {
        login,
        signup,
        logout,
        user
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;