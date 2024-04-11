import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    <AuthContext.Provider value={'hello'}>
        { children }
    </AuthContext.Provider>
};

export default AuthProvider;