import React from "react";
import { useState } from "react";
import styled from "styled-components";
import classes from "./Todo.module.css";
const Add = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  color: white;
  background-color: black;
  cursor: pointer;
  border-radius: 15px;
  font-size: 20px;
`;
const Input = styled.input`
  font-size: 30px;
  height: 45px;
  width: 400px;
  border-radius: 10px;
`;
export const TodoInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className={classes.main}>
      <div>
        <Input
          type="text"
          placeholder="Write Something"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></Input>
      </div>
      <div>
        <Add
          onClick={() => {
            console.log(value);
            setValue("");
          }}
        >
          +
        </Add>
      </div>
    </div>
  );
};
