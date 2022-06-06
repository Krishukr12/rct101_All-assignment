import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthContext";
const Div = styled.div`
  width: 20rem;
  height: 20rem;
  float: right;
  margin-right: 5rem;
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
const Input = styled.input`
  width: 80%;
  border: 1px solid teal;
  height: 2rem;
  color: black;
  outline: none;
  margin-top: 10%;
`;
const Submit = styled.button`
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  height: max-content;
  width: max-content;
  margin-top: 2rem;
  border: tranparent;
  font-weight: bold;
`;
const LoginPage = () => {
  const { ToggleAuth } = useContext(AuthContext);
  var user = useParams();
  console.log(user);
  return (
    <Div>
      <Input type="email" placeholder="Email"></Input>
      <Input type="password" placeholder="Passowrd"></Input>
      <br></br>
      <Submit onClick={ToggleAuth}>Submit</Submit>
    </Div>
  );
};

export default LoginPage;
