import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [IsAutorized, setIsAuthorized] = useState(false);
  const login = (username, password) => {
    if (username && password) {
      setIsAuthorized(true);
    }
  };
  const logout = () => {
    setIsAuthorized(false);
  };
  return (
    <AuthContext.Provider value={{ IsAutorized, login, logout,setIsAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
