import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import classes from "./Navbar.module.css";
const Div = styled.div`
  height: 3rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  padding-top: 0.5rem;
`;

export const Navbar = () => {
  return (
    <Div>
      <Link to="/">Home</Link>
      <Link to="/tshirt">Tshirt </Link>
      <Link to="/mobile">Mobile</Link>
      <Link to="/jeans">Jeans</Link>
      <div className={classes.Login_button}>
        <Login />
      </div>
    </Div>
  );
};
