import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const AuthRequired = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
