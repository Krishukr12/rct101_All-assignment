import { createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    const ToggleAuth=()=>{
        setIsAuth(!isAuth);
    }
    return <AuthContext.Provider value={{isAuth,ToggleAuth}}>{children}</AuthContext.Provider>
}