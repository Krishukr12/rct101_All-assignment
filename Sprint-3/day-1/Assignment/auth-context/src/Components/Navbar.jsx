import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Div } from "./styled";
import { Button } from "./styled";

const Navbar = () => {
  const { IsAutorized, login, logout, setIsAuthorized } =
    useContext(AuthContext);
  return (
    <Div>
      <Button
        onClick={() => {
          if (IsAutorized) {
            logout();
          } else {
            login("k", "r");
          }
        }}
      >
        {IsAutorized ? "Login" : "Logout"}
      </Button>
    </Div>
  );
};

export default Navbar;
