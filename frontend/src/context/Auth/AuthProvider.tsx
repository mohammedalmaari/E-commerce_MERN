import { useState, type FC, type PropsWithChildren } from "react"
import { AuthContext } from "./AuthContext"

export const AuthProvider:FC<PropsWithChildren> = ({children})=>{
    const [username, setUserName] = useState<string | null>(localStorage.getItem('username'));
    const [token , setToken] = useState<string |null>(localStorage.getItem('token'))
    const login = (username: string, token: string) => {
      setUserName(username);
      setToken(token);
      localStorage.setItem( "username", username );
      localStorage.setItem("token", token );
    };
    const isAuthentication = !!token;
    return (
      <AuthContext.Provider value={{ username, token, login,isAuthentication }}>
        {children}
      </AuthContext.Provider>
    );
}
