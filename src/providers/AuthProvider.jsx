import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import {auth} from "../firebase/firebase.config"

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const info = {
        createUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;