import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const {isAuth,ToggleAuth}=useContext(AuthContext);
  const Navigate=useNavigate();
  const Redirect=()=>{
    Navigate("/login")
  }
  return (
    <ButtonGroup variant="outline" spacing="10" >
      <Button colorScheme="blue" onClick={Redirect}>{isAuth ?"Logout":"Login"}</Button>
    </ButtonGroup>
  );
};

export default Login;
