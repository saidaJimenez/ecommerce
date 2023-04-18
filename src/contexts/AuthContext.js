import { createContext } from "react"

export const AuthContext = createContext()
export function AuthProvider(props){
    const {children} = props;

    const data ={
        accessToken: null,
        user:null,
        login:null,
        logout:null,
        updateUser:null,
    };
    return(
        <AuthContext.Provider value={data}>
            <p>Esto es el AuthContext</p>
            {children}
        </AuthContext.Provider>
    );
}