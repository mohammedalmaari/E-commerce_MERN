import { createContext, useContext } from "react";
interface AuthContextProps{
    username:string| null;
    token:string|null
    login :(username:string , token:string)=>void
    isAuthentication:boolean
}
export const AuthContext = createContext<AuthContextProps>({username:null , token:null ,login:()=>{},isAuthentication:false})

export const useAuth =()=> useContext(AuthContext)