import { createContext, useContext } from "react";
interface AuthContextProps{
    username:string| null;
    token:string|null
    isAuthentication:boolean
    login :(username:string , token:string)=>void
    logout:()=>void
}
export const AuthContext = createContext<AuthContextProps>({
  username: null,
  token: null,
  isAuthentication: false,
  login: () => {},
  logout:()=>{}
});

export const useAuth =()=> useContext(AuthContext)