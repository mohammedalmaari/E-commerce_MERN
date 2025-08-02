import { createContext, useContext } from "react";
interface AuthContextProps{
    username:string| null;
    token:string|null
    login :(username:string , token:string)=>void
}
export const AuthContext = createContext<AuthContextProps>({username:null , token:null ,login:()=>{}})

export const useAuth =()=> useContext(AuthContext)